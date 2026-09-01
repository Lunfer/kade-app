import anthropic
from fastapi import Depends, FastAPI, Header, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse

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


@app.get("/privacy-policy", response_class=HTMLResponse)
def privacy_policy() -> str:
    return """
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Kade – Privacy Policy</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 680px; margin: 48px auto; padding: 0 24px 64px; color: #1a1a1a; }
    h1 { font-size: 1.8rem; margin-bottom: 4px; }
    .date { color: #888; font-size: 0.9rem; margin-bottom: 32px; }
    h2 { font-size: 1.1rem; margin-top: 36px; margin-bottom: 8px; }
    p, li { line-height: 1.6; }
    a { color: #0a7a6c; }
  </style>
</head>
<body>

  <h1>Privacy Policy</h1>
  <p class="date">Last updated: September 2026</p>

  <p>Kade is a personal Dutch grammar and vocabulary learning app. This policy explains what data the app handles, why, and how you can control it.</p>

  <h2>1. Data We Collect</h2>
  <p>Kade does not require an account, and does not collect your name, email address, or any other personal identifier.</p>
  <ul>
    <li><strong>Practice sentences you write.</strong> When you use the writing-practice feature, the Dutch sentence you type (along with which grammar point it's testing) is sent to our backend, which forwards it to Anthropic's API to be graded. It is not stored on our server after grading -- the backend is a stateless pass-through.</li>
    <li><strong>Your learning progress.</strong> Vocabulary you've learned, grammar topics completed, and flashcard/quiz results are stored only in a local database on your own device. This data is never uploaded anywhere and Kade has no way to see it.</li>
  </ul>

  <h2>2. Third-Party Services</h2>
  <p>Practice sentences you submit for grading are processed by <a href="https://www.anthropic.com/" target="_blank" rel="noopener">Anthropic</a>, the company providing the AI model that grades your writing. See <a href="https://www.anthropic.com/legal/privacy" target="_blank" rel="noopener">Anthropic's Privacy Policy</a> for how they handle API data.</p>
  <p>Kade does not use advertising networks or analytics/tracking SDKs of any kind.</p>

  <h2>3. Data Retention</h2>
  <p>Sentences submitted for grading are not retained by Kade's backend once a response is returned. Data stored locally on your device (progress, vocabulary, flashcard history) remains there until you clear the app's storage or uninstall it.</p>

  <h2>4. Children's Privacy</h2>
  <p>Kade is not directed at children and does not knowingly collect personal information from children.</p>

  <h2>5. Your Choices</h2>
  <p>Because your progress data lives only on your device, uninstalling Kade removes it completely. There is no server-side account to delete.</p>

  <h2>6. Changes to This Policy</h2>
  <p>If this policy changes, the updated version will be posted at this same address with a new "Last updated" date.</p>

  <h2>7. Contact</h2>
  <p>If you have any questions about this privacy policy, please contact us at <a href="mailto:kadeapp@outlook.com">kadeapp@outlook.com</a>.</p>

</body>
</html>
"""


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
