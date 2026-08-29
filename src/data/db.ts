import * as SQLite from 'expo-sqlite';

const DB_NAME = 'kade.db';

let dbPromise: Promise<SQLite.SQLiteDatabase> | null = null;

export function getDb(): Promise<SQLite.SQLiteDatabase> {
  if (!dbPromise) {
    dbPromise = SQLite.openDatabaseAsync(DB_NAME).then(async (db) => {
      await db.execAsync('PRAGMA journal_mode = WAL;');
      await runMigrations(db);
      return db;
    });
  }
  return dbPromise;
}

async function runMigrations(db: SQLite.SQLiteDatabase): Promise<void> {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS schema_meta (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS themes (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS words (
      id TEXT PRIMARY KEY,
      nl TEXT NOT NULL,
      en TEXT NOT NULL,
      theme_id TEXT NOT NULL REFERENCES themes(id),
      first_introduced_topic_id TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS grammar_topics (
      id TEXT PRIMARY KEY,
      level TEXT NOT NULL,
      category TEXT NOT NULL,
      title TEXT NOT NULL,
      explanation TEXT NOT NULL,
      examples_json TEXT NOT NULL,
      order_num INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS drill_items (
      id TEXT PRIMARY KEY,
      topic_id TEXT NOT NULL REFERENCES grammar_topics(id),
      type TEXT NOT NULL,
      prompt TEXT NOT NULL,
      data_json TEXT NOT NULL,
      correct_answers_json TEXT NOT NULL,
      word_ids_json TEXT
    );

    CREATE TABLE IF NOT EXISTS writing_prompts (
      id TEXT PRIMARY KEY,
      topic_ids_json TEXT NOT NULL,
      prompt_text TEXT NOT NULL,
      prompt_text_en TEXT NOT NULL,
      target_grammar_points_json TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS attempt_records (
      id TEXT PRIMARY KEY,
      topic_id TEXT NOT NULL,
      item_id TEXT NOT NULL,
      item_type TEXT NOT NULL,
      timestamp INTEGER NOT NULL,
      correct INTEGER,
      score REAL,
      user_answer TEXT NOT NULL,
      feedback TEXT
    );

    CREATE TABLE IF NOT EXISTS topic_progress (
      topic_id TEXT PRIMARY KEY,
      attempts INTEGER NOT NULL DEFAULT 0,
      correct INTEGER NOT NULL DEFAULT 0,
      recent_accuracy REAL NOT NULL DEFAULT 0,
      last_practiced_at INTEGER
    );

    CREATE TABLE IF NOT EXISTS user_progress (
      id INTEGER PRIMARY KEY CHECK (id = 1),
      current_level TEXT NOT NULL DEFAULT 'A1',
      level_override TEXT,
      streak_days INTEGER NOT NULL DEFAULT 0,
      last_active_date TEXT
    );

    INSERT OR IGNORE INTO user_progress (id, current_level, streak_days) VALUES (1, 'A1', 0);
  `);
}

/** Wipes all user-generated data (attempts/progress) but keeps content tables. Used by Settings > Reset progress. */
export async function resetProgress(): Promise<void> {
  const db = await getDb();
  await db.execAsync(`
    DELETE FROM attempt_records;
    DELETE FROM topic_progress;
    UPDATE user_progress SET current_level = 'A1', level_override = NULL, streak_days = 0, last_active_date = NULL WHERE id = 1;
  `);
}
