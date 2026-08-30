import { getDb } from '../data/db';
import { a1Themes } from './a1/themes';
import { a1Words, WordSeed } from './a1/words';
import { a1Topics } from './a1/topics';
import { a1Drills } from './a1/drills';
import { a1WritingPrompts } from './a1/writingPrompts';

// Bump this whenever seed content changes shape or content. Content tables
// get wiped and re-inserted on a version bump; attempts/progress are
// untouched, since those are the user's actual data, not content.
const CONTENT_VERSION = '2026-08-30.2';

export const allThemes = [...a1Themes];
export const allWords: WordSeed[] = [...a1Words];
export const allTopics = [...a1Topics];
export const allDrills = [...a1Drills];
export const allWritingPrompts = [...a1WritingPrompts];

export async function seedContentIfNeeded(): Promise<void> {
  const db = await getDb();
  const row = await db.getFirstAsync<{ value: string }>(
    `SELECT value FROM schema_meta WHERE key = 'content_version'`
  );
  if (row?.value === CONTENT_VERSION) return;

  await db.withTransactionAsync(async () => {
    await db.execAsync(`
      DELETE FROM drill_items;
      DELETE FROM writing_prompts;
      DELETE FROM grammar_topics;
      DELETE FROM words;
      DELETE FROM themes;
    `);

    for (const t of allThemes) {
      await db.runAsync(`INSERT INTO themes (id, name) VALUES (?, ?)`, [t.id, t.name]);
    }
    for (const w of allWords) {
      await db.runAsync(
        `INSERT INTO words (id, nl, en, theme_id, first_introduced_topic_id) VALUES (?, ?, ?, ?, ?)`,
        [w.id, w.nl, w.en, w.themeId, w.firstIntroducedTopicId]
      );
    }
    for (const topic of allTopics) {
      await db.runAsync(
        `INSERT INTO grammar_topics (id, level, category, title, explanation, examples_json, order_num) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [topic.id, topic.level, topic.category, topic.title, topic.explanation, JSON.stringify(topic.examples), topic.order]
      );
    }
    for (const d of allDrills) {
      await db.runAsync(
        `INSERT INTO drill_items (id, topic_id, type, prompt, data_json, correct_answers_json, word_ids_json) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [d.id, d.topicId, d.type, d.prompt, JSON.stringify(d.data), JSON.stringify(d.correctAnswers), d.wordIds ? JSON.stringify(d.wordIds) : null]
      );
    }
    for (const p of allWritingPrompts) {
      await db.runAsync(
        `INSERT INTO writing_prompts (id, topic_ids_json, prompt_text, prompt_text_en, target_grammar_points_json) VALUES (?, ?, ?, ?, ?)`,
        [p.id, JSON.stringify(p.topicIds), p.promptText, p.promptTextEn, JSON.stringify(p.targetGrammarPoints)]
      );
    }

    await db.runAsync(
      `INSERT INTO schema_meta (key, value) VALUES ('content_version', ?)
       ON CONFLICT(key) DO UPDATE SET value = excluded.value`,
      [CONTENT_VERSION]
    );
  });
}

/** Builds a lookup from every known surface form (lowercased) to its Word, for gloss rendering. */
export function buildSurfaceFormIndex(words: WordSeed[] = allWords): Map<string, WordSeed> {
  const index = new Map<string, WordSeed>();
  for (const w of words) {
    const forms = w.surfaceForms && w.surfaceForms.length > 0 ? w.surfaceForms : [w.nl];
    for (const form of forms) {
      index.set(form.toLowerCase(), w);
    }
  }
  return index;
}
