"""Covers main.py's error-mapping logic for /grade: the three pattern-matched
anthropic.APIStatusError cases (out-of-credits -> 402, bad key -> 502,
rate-limited -> 429), the RuntimeError case (missing key), the fallback for
an unrecognized APIStatusError, and the generic-exception fallback.

Everything here monkeypatches grade_with_claude to raise a specific
exception rather than calling the real Anthropic API -- these tests run in
CI with no ANTHROPIC_API_KEY and spend nothing.
"""
import anthropic
import httpx
import pytest

from app import main

VALID_BODY = {"sentence": "Ik woon in Rotterdam", "targetGrammarPoints": []}


def _api_status_error(status_code: int, message: str) -> anthropic.APIStatusError:
    """Build a real anthropic.APIStatusError the way the SDK itself would
    construct one from an HTTP response, so main.py's `err.status_code` /
    `str(err)` handling is exercised exactly as it runs in production."""
    request = httpx.Request("POST", "https://api.anthropic.com/v1/messages")
    response = httpx.Response(
        status_code,
        request=request,
        json={"type": "error", "error": {"type": "error", "message": message}},
    )
    return anthropic.APIStatusError(message, response=response, body=None)


@pytest.fixture(autouse=True)
def _authed(monkeypatch):
    # Every test here is about the error-mapping *after* auth passes, so
    # fix API_SECRET once for the whole file rather than repeating it.
    monkeypatch.setattr(main, "API_SECRET", "test-secret")


def _post(client):
    return client.post(
        "/grade", json=VALID_BODY, headers={"X-API-Secret": "test-secret"}
    )


def test_runtime_error_maps_to_502(client, monkeypatch):
    async def raise_runtime_error(request):
        raise RuntimeError("ANTHROPIC_API_KEY is not set (see backend/.env.example)")

    monkeypatch.setattr(main, "grade_with_claude", raise_runtime_error)
    response = _post(client)
    assert response.status_code == 502


def test_out_of_credits_maps_to_402(client, monkeypatch):
    async def raise_credit_error(request):
        raise _api_status_error(400, "Your credit balance is too low")

    monkeypatch.setattr(main, "grade_with_claude", raise_credit_error)
    response = _post(client)
    assert response.status_code == 402
    assert "out of credits" in response.json()["detail"].lower()


def test_bad_key_maps_to_502(client, monkeypatch):
    async def raise_auth_error(request):
        raise _api_status_error(401, "invalid x-api-key")

    monkeypatch.setattr(main, "grade_with_claude", raise_auth_error)
    response = _post(client)
    assert response.status_code == 502
    assert "ANTHROPIC_API_KEY" in response.json()["detail"]


def test_rate_limit_maps_to_429(client, monkeypatch):
    async def raise_rate_limit(request):
        raise _api_status_error(429, "rate limited")

    monkeypatch.setattr(main, "grade_with_claude", raise_rate_limit)
    response = _post(client)
    assert response.status_code == 429


def test_unrecognized_anthropic_error_maps_to_502(client, monkeypatch):
    async def raise_other(request):
        raise _api_status_error(500, "upstream is having a bad day")

    monkeypatch.setattr(main, "grade_with_claude", raise_other)
    response = _post(client)
    assert response.status_code == 502
    assert "upstream is having a bad day" in response.json()["detail"]


def test_generic_exception_maps_to_502(client, monkeypatch):
    async def raise_generic(request):
        raise ValueError("something unrelated broke")

    monkeypatch.setattr(main, "grade_with_claude", raise_generic)
    response = _post(client)
    assert response.status_code == 502
