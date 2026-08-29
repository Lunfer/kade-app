import anthropic
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

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


@app.post("/grade", response_model=GradeResponse)
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
