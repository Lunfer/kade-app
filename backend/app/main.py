import anthropic
from fastapi import Depends, FastAPI, Header, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from .config import API_SECRET
from .grading import grade_with_claude
from .models import GradeRequest, GradeResponse

app = FastAPI(title="Kade grading backend", version="1.0.0")

# Personal project, single client (the phone) -- wide open CORS is fine and
# avoids the classic "works on emulator, blocked on device" trap.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health() -> dict:
    return {"status": "ok"}


def verify_api_secret(x_api_secret: str | None = Header(default=None)) -> None:
    """Shared-secret guard, same pattern as Rhoi's verify_cron.

    Only enforced when API_SECRET is actually set (backend/.env locally, a
    Secret Manager-backed env var on Cloud Run) -- unset means dev-mode LAN
    use with no header required. Once deployed publicly, set it so a bare
    Cloud Run URL can't be hit by anonymous scanners spending the Anthropic
    API credits behind it. Note this only stops opportunistic/anonymous
    abuse: the secret ships inside the built app (EXPO_PUBLIC_API_SECRET),
    so it is not secret from someone who decompiles the APK -- proportionate
    for a personal single-user app, not a substitute for real per-user auth.
    """
    if not API_SECRET or x_api_secret != API_SECRET:
        raise HTTPException(status_code=403, detail="Forbidden")


@app.post("/grade", response_model=GradeResponse, dependencies=[Depends(verify_api_secret)])
async def grade(request: GradeRequest) -> GradeResponse:
    try:
        return await grade_with_claude(request)
    except RuntimeError as err:
        raise HTTPException(status_code=502, detail=str(err))
    except anthropic.APIStatusError as err:
        # Give the three most common Anthropic API failures a clean, specific
        # message instead of dumping the raw upstream JSON into the app UI.
        message = str(err)
        if err.status_code == 400 and "credit balance" in message.lower():
            raise HTTPException(
                status_code=402,
                detail=(
                    "Your Anthropic API account is out of credits. Add more at "
                    "console.anthropic.com (Billing), then try again."
                ),
            )
        if err.status_code == 401:
            raise HTTPException(
                status_code=502,
                detail=(
                    "The backend's ANTHROPIC_API_KEY was rejected by Anthropic. "
                    "Double-check the key in backend/.env."
                ),
            )
        if err.status_code == 429:
            raise HTTPException(
                status_code=429,
                detail="Anthropic API rate limit hit -- wait a moment and try again.",
            )
        raise HTTPException(status_code=502, detail=f"Grading failed: {message}")
    except Exception as err:  # noqa: BLE001 -- surface upstream API errors as 502s
        raise HTTPException(status_code=502, detail=f"Grading failed: {err}")
