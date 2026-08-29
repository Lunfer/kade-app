"""Calls the Anthropic API to grade a free-form Dutch sentence.

Uses forced tool-use so the model's response comes back as structured JSON
(matching GradeResponse) instead of prose that has to be parsed, which is
far more reliable for a small personal app that doesn't need heavy retry
logic.
"""

import anthropic

from .config import ANTHROPIC_API_KEY, ANTHROPIC_MODEL
from .models import GradeRequest, GradeResponse

_client: anthropic.AsyncAnthropic | None = None


def get_client() -> anthropic.AsyncAnthropic:
    global _client
    if _client is None:
        if not ANTHROPIC_API_KEY:
            raise RuntimeError("ANTHROPIC_API_KEY is not set (see backend/.env.example)")
        _client = anthropic.AsyncAnthropic(api_key=ANTHROPIC_API_KEY)
    return _client


SUBMIT_GRADING_TOOL = {
    "name": "submit_grading",
    "description": "Submit the grading result for a Dutch sentence written by a language learner.",
    "input_schema": {
        "type": "object",
        "properties": {
            "correct": {
                "type": "boolean",
                "description": "True only if the sentence is fully grammatically correct and natural Dutch.",
            },
            "score": {
                "type": "integer",
                "minimum": 0,
                "maximum": 100,
                "description": "0-100 quality score. 100 = perfect. Deduct heavily for errors in the target grammar point(s).",
            },
            "correctedSentence": {
                "type": "string",
                "description": "The corrected Dutch sentence. If already correct, repeat it unchanged.",
            },
            "explanation": {
                "type": "string",
                "description": (
                    "Plain-English explanation for the learner: what was wrong (if anything) and why, "
                    "explicitly tied back to the target grammar point(s) so it reinforces the specific rule "
                    "being practiced, not just a generic fix."
                ),
            },
        },
        "required": ["correct", "score", "correctedSentence", "explanation"],
    },
}


def build_system_prompt() -> str:
    return (
        "You are a patient, precise Dutch grammar tutor grading a beginner-to-intermediate learner's "
        "free-form sentence. Evaluate correctness of grammar, word order, and word choice. "
        "Pay special attention to the specific grammar point(s) the learner was asked to practice -- "
        "your explanation must connect any error (or correct usage) back to that specific rule, "
        "not just describe the fix in isolation. Keep the explanation short (2-4 sentences), plain-English, "
        "and encouraging. Always respond by calling the submit_grading tool."
    )


def build_user_message(request: GradeRequest) -> str:
    parts = [f'Learner\'s sentence: "{request.sentence}"']
    if request.promptText:
        parts.append(f'The prompt they were responding to: "{request.promptText}"')
    if request.targetGrammarPoints:
        points = "; ".join(request.targetGrammarPoints)
        parts.append(f"Target grammar point(s) to specifically check and reference in your explanation: {points}")
    return "\n".join(parts)


async def grade_with_claude(request: GradeRequest) -> GradeResponse:
    client = get_client()
    message = await client.messages.create(
        model=ANTHROPIC_MODEL,
        max_tokens=512,
        system=build_system_prompt(),
        tools=[SUBMIT_GRADING_TOOL],
        tool_choice={"type": "tool", "name": "submit_grading"},
        messages=[{"role": "user", "content": build_user_message(request)}],
    )

    for block in message.content:
        if block.type == "tool_use" and block.name == "submit_grading":
            return GradeResponse(**block.input)

    raise RuntimeError("Model did not return a submit_grading tool call")
