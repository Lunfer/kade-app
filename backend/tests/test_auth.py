"""POST /grade -- the verify_api_secret guard.

Covers the four cases that matter: missing header, wrong header, correct
header (grading itself mocked out -- never calls the real Anthropic API),
and the "API_SECRET not configured" case, which must still reject rather
than silently disabling auth.
"""
from app import main
from app.models import GradeResponse

VALID_BODY = {
    "sentence": "Ik woon in Rotterdam",
    "targetGrammarPoints": ["present tense verb agreement"],
}


def test_grade_rejects_missing_header(client, monkeypatch):
    monkeypatch.setattr(main, "API_SECRET", "correct-secret")
    response = client.post("/grade", json=VALID_BODY)
    assert response.status_code == 403
    assert response.json() == {"detail": "Forbidden"}


def test_grade_rejects_wrong_header(client, monkeypatch):
    monkeypatch.setattr(main, "API_SECRET", "correct-secret")
    response = client.post(
        "/grade", json=VALID_BODY, headers={"X-API-Secret": "wrong-secret"}
    )
    assert response.status_code == 403


def test_grade_accepts_correct_header(client, monkeypatch):
    monkeypatch.setattr(main, "API_SECRET", "correct-secret")

    async def fake_grade(request):
        return GradeResponse(
            correct=True,
            score=100,
            correctedSentence=request.sentence,
            explanation="Looks good!",
        )

    monkeypatch.setattr(main, "grade_with_claude", fake_grade)

    response = client.post(
        "/grade", json=VALID_BODY, headers={"X-API-Secret": "correct-secret"}
    )
    assert response.status_code == 200
    body = response.json()
    assert body["correct"] is True
    assert body["score"] == 100
    assert body["correctedSentence"] == VALID_BODY["sentence"]


def test_grade_with_no_api_secret_configured_always_rejects(client, monkeypatch):
    # Empty API_SECRET (the actual default -- e.g. local LAN dev with no
    # .env override) must still reject every request. "Not configured"
    # must never silently mean "auth disabled."
    monkeypatch.setattr(main, "API_SECRET", "")
    response = client.post(
        "/grade", json=VALID_BODY, headers={"X-API-Secret": "anything"}
    )
    assert response.status_code == 403
