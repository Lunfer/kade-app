import { getApiBaseUrl } from '../config/env';

export interface GradeRequest {
  sentence: string;
  targetGrammarPoints: string[];
  promptText?: string;
}

export interface GradeResponse {
  correct: boolean;
  score: number; // 0-100
  correctedSentence: string;
  explanation: string;
}

export async function gradeSentence(request: GradeRequest): Promise<GradeResponse> {
  const url = `${getApiBaseUrl()}/grade`;
  let response: Response;
  try {
    response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request),
    });
  } catch (err) {
    throw new Error(
      `Could not reach the grading server at ${url}. Is the backend running, and is your phone on the same network? (${(err as Error).message})`
    );
  }

  if (!response.ok) {
    const text = await response.text().catch(() => '');
    // FastAPI's HTTPException returns {"detail": "..."} -- unwrap it so the UI
    // shows the clean, human-written message instead of raw JSON.
    let detail = text || response.statusText;
    try {
      const parsed = JSON.parse(text);
      if (typeof parsed?.detail === 'string' && parsed.detail.length > 0) {
        detail = parsed.detail;
      }
    } catch {
      // Not JSON (e.g. a proxy error page) -- fall back to the raw text.
    }
    // 402 = out of Anthropic credits, 429 = rate limited: the backend already
    // writes a complete, friendly sentence for these, so show it as-is rather
    // than prefixing "Grading server returned 402: ...".
    if (response.status === 402 || response.status === 429) {
      throw new Error(detail);
    }
    throw new Error(`Grading server returned ${response.status}: ${detail}`);
  }

  return (await response.json()) as GradeResponse;
}
