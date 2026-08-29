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
