// Core data model. See docs/dutch-grammar-app-cowork-prompt.md for the
// original spec this maps to. Designed so a future cloud-sync layer could
// wrap these repositories without changing callers: every record carries a
// stable string id and plain-JSON-serializable fields only.

export type Level = 'A0' | 'A1' | 'A2' | 'B1' | 'B2';

export type GrammarCategory =
  | 'verb'
  | 'word-order'
  | 'article'
  | 'adjective'
  | 'preposition'
  | 'pronoun'
  | 'possessive'
  | 'comparison'
  | 'conjunction'
  | 'negation'
  | 'question'
  | 'diminutive'
  | 'other';

export interface GrammarTopic {
  id: string;
  level: Level;
  category: GrammarCategory;
  title: string;
  /** Plain-English, example-driven explanation. Markdown-lite: blank lines = paragraphs. */
  explanation: string;
  examples: { nl: string; en: string }[];
  order: number;
}

export type DrillQuestionType = 'conjugation' | 'word-order' | 'multiple-choice' | 'fill-blank';

export interface DrillItem {
  id: string;
  topicId: string;
  type: DrillQuestionType;
  prompt: string;
  /** Free-form per question type: tokens to reorder, MC options, etc. */
  data: Record<string, unknown>;
  correctAnswers: string[];
  /** Word ids introduced or reinforced by this item, for vocab tracking. */
  wordIds?: string[];
}

export interface WritingPrompt {
  id: string;
  topicIds: string[];
  promptText: string;
  promptTextEn: string;
  /** Grammar points the AI grader should specifically listen for. */
  targetGrammarPoints: string[];
}

export type AttemptItemType = 'drill' | 'writing';

export interface AttemptRecord {
  id: string;
  topicId: string;
  itemId: string;
  itemType: AttemptItemType;
  timestamp: number;
  correct: boolean | null;
  /** 0-100 for AI-graded writing; null for drills (binary correct/incorrect). */
  score: number | null;
  userAnswer: string;
  feedback: string | null;
}

export interface TopicProgress {
  topicId: string;
  attempts: number;
  correct: number;
  /** Rolling accuracy over the most recent attempts, used for weighted selection. */
  recentAccuracy: number;
  lastPracticedAt: number | null;
}

export interface UserProgress {
  currentLevel: Level;
  levelOverride: Level | null;
  streakDays: number;
  lastActiveDate: string | null; // ISO date, local
  topics: Record<string, TopicProgress>;
}

export interface Theme {
  id: string;
  name: string;
}

export interface Word {
  id: string;
  nl: string;
  en: string;
  themeId: string;
  firstIntroducedTopicId: string;
}
