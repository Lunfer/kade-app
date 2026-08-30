"""GET /health -- the one route that must never require auth (Cloud Run
and a plain curl check both rely on this)."""


def test_health_ok(client):
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_health_needs_no_auth_header(client):
    response = client.get("/health")  # no X-API-Secret sent at all
    assert response.status_code == 200
