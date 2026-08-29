import { DrillItem, GrammarTopic, TopicProgress, WritingPrompt } from '../data/types';

/** Lowercases, strips punctuation, and collapses whitespace so grading isn't
 * fooled by a missing period or different capitalization. */
export function normalize(input: string): string {
  return input
    .toLowerCase()
    .replace(/['".,!?;:]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function gradeDrillAnswer(item: DrillItem, userAnswer: string): boolean {
  const normalizedUser = normalize(userAnswer);
  return item.correctAnswers.some((a) => normalize(a) === normalizedUser);
}

/** Reconstructs the sentence a user built by tapping tokens in order, for
 * word-order items. Capitalization/punctuation is handled by `normalize`
 * at grading time, so this can just join with spaces. */
export function joinTokens(tokens: string[]): string {
  return tokens.join(' ');
}

const NEW_TOPIC_WEIGHT = 0.9;
const MASTERED_FLOOR_WEIGHT = 0.12;

/**
 * Weighted-random topic selection, biased toward weak spots. Not a full
 * SM-2 spaced-repetition implementation -- just weighted-by-recent-accuracy,
 * which is enough for v1 per the product spec. A topic with 0% recent
 * accuracy is ~8x more likely to be picked than one at 100%.
 */
export function weightForTopic(progress: TopicProgress | undefined): number {
  if (!progress || progress.attempts === 0) return NEW_TOPIC_WEIGHT;
  return Math.max(MASTERED_FLOOR_WEIGHT, 1 - progress.recentAccuracy);
}

export function pickWeightedRandom<T>(items: T[], weights: number[]): T {
  const total = weights.reduce((sum, w) => sum + w, 0);
  if (total <= 0) return items[Math.floor(Math.random() * items.length)];
  let r = Math.random() * total;
  for (let i = 0; i < items.length; i++) {
    r -= weights[i];
    if (r <= 0) return items[i];
  }
  return items[items.length - 1];
}

export type PracticeQueueItem =
  | { kind: 'drill'; topic: GrammarTopic; drill: DrillItem }
  | { kind: 'writing'; topic: GrammarTopic; prompt: WritingPrompt };

/**
 * Builds a mixed queue of drills and writing prompts, weighted toward the
 * topics the user is weakest on. Roughly 1 in 4 items is a writing prompt
 * when one is available for the chosen topic, so the two practice modes
 * stay mixed together rather than being separate modules.
 */
export function buildPracticeQueue(params: {
  topics: GrammarTopic[];
  drillsByTopic: Map<string, DrillItem[]>;
  writingPromptsByTopic: Map<string, WritingPrompt[]>;
  topicProgress: Record<string, TopicProgress>;
  length?: number;
}): PracticeQueueItem[] {
  const { topics, drillsByTopic, writingPromptsByTopic, topicProgress, length = 10 } = params;
  const eligibleTopics = topics.filter((t) => (drillsByTopic.get(t.id)?.length ?? 0) > 0);
  if (eligibleTopics.length === 0) return [];

  const weights = eligibleTopics.map((t) => weightForTopic(topicProgress[t.id]));
  const queue: PracticeQueueItem[] = [];
  const usedDrillIds = new Set<string>();

  for (let i = 0; i < length; i++) {
    const topic = pickWeightedRandom(eligibleTopics, weights);
    const wantsWriting = i > 0 && i % 4 === 3 && (writingPromptsByTopic.get(topic.id)?.length ?? 0) > 0;

    if (wantsWriting) {
      const prompts = writingPromptsByTopic.get(topic.id)!;
      queue.push({ kind: 'writing', topic, prompt: prompts[Math.floor(Math.random() * prompts.length)] });
      continue;
    }

    const drills = (drillsByTopic.get(topic.id) ?? []).filter((d) => !usedDrillIds.has(d.id));
    const pool = drills.length > 0 ? drills : drillsByTopic.get(topic.id) ?? [];
    if (pool.length === 0) continue;
    const drill = pool[Math.floor(Math.random() * pool.length)];
    usedDrillIds.add(drill.id);
    queue.push({ kind: 'drill', topic, drill });
  }

  return queue;
}
