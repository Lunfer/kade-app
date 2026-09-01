"""GET /privacy-policy -- must never require auth (Play Console and anyone
reading the policy hit this anonymously)."""


def test_privacy_policy_ok(client):
    response = client.get("/privacy-policy")
    assert response.status_code == 200
    assert "text/html" in response.headers["content-type"]


def test_privacy_policy_needs_no_auth_header(client):
    response = client.get("/privacy-policy")  # no X-API-Secret sent at all
    assert response.status_code == 200


def test_privacy_policy_mentions_contact_and_anthropic(client):
    body = client.get("/privacy-policy").text
    assert "kadeapp@outlook.com" in body
    assert "Anthropic" in body
