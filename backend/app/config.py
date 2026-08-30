import os
from pathlib import Path

from dotenv import load_dotenv

# Loads backend/.env when running locally (uvicorn). On Cloud Run, env vars
# are injected by the platform instead and this is a harmless no-op since
# there's no .env file present.
load_dotenv(Path(__file__).resolve().parent.parent / ".env")

ANTHROPIC_API_KEY = os.environ.get("ANTHROPIC_API_KEY", "")
# Override via env if Anthropic retires this model id; see docs.claude.com/en/docs/about-claude/models
ANTHROPIC_MODEL = os.environ.get("ANTHROPIC_MODEL", "claude-sonnet-5")

# Shared-secret guard for /grade once this is deployed off the LAN (see
# main.py verify_api_secret). Empty by default -- unset means the check is
# skipped, which is fine for local dev but must be set before deploying
# publicly. Same pattern as Rhoi's CRON_SECRET: a random value stored in
# Secret Manager, injected as an env var, never committed.
API_SECRET = os.environ.get("API_SECRET", "")
