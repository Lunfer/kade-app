import { getDb } from '../db';
import { GrammarTopic, DrillItem, WritingPrompt, Word, Theme } from '../types';

function parseTopicRow(row: any): GrammarTopic {
  return {
    id: row.id,
    level: row.level,
    category: row.category,
    title: row.title,
    explanation: row.explanation,
    examples: JSON.parse(row.examples_json),
    order: row.order_num,
  };
}

function parseDrillRow(row: any): DrillItem {
  return {
    id: row.id,
    topicId: row.topic_id,
    type: row.type,
    prompt: row.prompt,
    data: JSON.parse(row.data_json),
    correctAnswers: JSON.parse(row.correct_answers_json),
    wordIds: row.word_ids_json ? JSON.parse(row.word_ids_json) : undefined,
  };
}

function parseWritingPromptRow(row: any): WritingPrompt {
  return {
    id: row.id,
    topicIds: JSON.parse(row.topic_ids_json),
    promptText: row.prompt_text,
    promptTextEn: row.prompt_text_en,
    targetGrammarPoints: JSON.parse(row.target_grammar_points_json),
  };
}

export const topicsRepo = {
  async getAll(): Promise<GrammarTopic[]> {
    const db = await getDb();
    const rows = await db.getAllAsync(`SELECT * FROM grammar_topics ORDER BY order_num ASC`);
    return rows.map(parseTopicRow);
  },
  async getByLevel(level: string): Promise<GrammarTopic[]> {
    const db = await getDb();
    const rows = await db.getAllAsync(`SELECT * FROM grammar_topics WHERE level = ? ORDER BY order_num ASC`, [level]);
    return rows.map(parseTopicRow);
  },
  async getById(id: string): Promise<GrammarTopic | null> {
    const db = await getDb();
    const row = await db.getFirstAsync(`SELECT * FROM grammar_topics WHERE id = ?`, [id]);
    return row ? parseTopicRow(row) : null;
  },
};

export const drillsRepo = {
  async getAll(): Promise<DrillItem[]> {
    const db = await getDb();
    const rows = await db.getAllAsync(`SELECT * FROM drill_items`);
    return rows.map(parseDrillRow);
  },
  async getByTopic(topicId: string): Promise<DrillItem[]> {
    const db = await getDb();
    const rows = await db.getAllAsync(`SELECT * FROM drill_items WHERE topic_id = ?`, [topicId]);
    return rows.map(parseDrillRow);
  },
};

export const writingPromptsRepo = {
  async getAll(): Promise<WritingPrompt[]> {
    const db = await getDb();
    const rows = await db.getAllAsync(`SELECT * FROM writing_prompts`);
    return rows.map(parseWritingPromptRow);
  },
  async getByTopic(topicId: string): Promise<WritingPrompt[]> {
    const all = await this.getAll();
    return all.filter((p) => p.topicIds.includes(topicId));
  },
};

export const wordsRepo = {
  async getAll(): Promise<Word[]> {
    const db = await getDb();
    const rows = await db.getAllAsync<any>(`SELECT * FROM words`);
    return rows.map((r) => ({ id: r.id, nl: r.nl, en: r.en, themeId: r.theme_id, firstIntroducedTopicId: r.first_introduced_topic_id }));
  },
};

export const themesRepo = {
  async getAll(): Promise<Theme[]> {
    const db = await getDb();
    const rows = await db.getAllAsync<any>(`SELECT * FROM themes`);
    return rows.map((r) => ({ id: r.id, name: r.name }));
  },
};
