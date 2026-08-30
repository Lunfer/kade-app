"""Shared pytest fixtures for the Kade backend test suite.

Deliberately does NOT rely on env-var timing tricks to control API_SECRET
or the Anthropic call: config.py reads its env vars once, at import time,
so setting env vars from inside a test (even with monkeypatch.setenv) is
fragile depending on import order. Instead, tests monkeypatch the specific
names app/main.py already bound into its own module namespace --
`from .config import API_SECRET` and `from .grading import grade_with_claude`
create new bindings inside `app.main`, independent of the source modules,
so patching `main.API_SECRET` / `main.grade_with_claude` directly (see
test_auth.py, test_grading_errors.py) is the reliable way to control
behavior per test, and never touches the real Anthropic API.
"""
import sys
from pathlib import Path

import pytest
from fastapi.testclient import TestClient

# Make `app` importable when pytest is run from backend/ (as the CI
# workflow and the "Running tests" section of the README both do).
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from app.main import app  # noqa: E402


@pytest.fixture
def client():
    return TestClient(app)
