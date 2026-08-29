from typing import List, Optional
from pydantic import BaseModel, Field


class GradeRequest(BaseModel):
    sentence: str = Field(..., min_length=1, max_length=1000)
    targetGrammarPoints: List[str] = Field(default_factory=list)
    promptText: Optional[str] = None


class GradeResponse(BaseModel):
    correct: bool
    score: int = Field(..., ge=0, le=100)
    correctedSentence: str
    explanation: str
