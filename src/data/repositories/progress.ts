import { getDb, resetProgress as resetProgressDb } from '../db';
import { AttemptRecord, Level, TopicProgress, UserProgress } from '../types';

const ROLLING_WINDOW = 20;
const CORRECT_SCORE_THRESHOLD = 70;

function todayIso(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function daysBetween(aIso: string, bIso: string): number {
  const a = new Date(aIso + 'T00:00:00');
  const b = new Date(bIso + 'T00:00:00');
  return Math.round((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
}

export const progressRepo = {
  async getUserProgress(): Promise<UserProgress> {
    const db = await getDb();
    const userRow = await db.getFirstAsync<any>(`SELECT * FROM user_progress WHERE id = 1`);
    const topicRows = await db.getAllAsync<any>(`SELECT * FROM topic_progress`);
    const topics: Record<string, TopicProgress> = {};
    for (const r of topicRows) {
      topics[r.topic_id] = {
        topicId: r.topic_id,
        attempts: r.attempts,
        correct: r.correct,
        recentAccuracy: r.recent_accuracy,
        lastPracticedAt: r.last_practiced_at,
      };
    }
    return {
      currentLevel: (userRow?.current_level ?? 'A1') as Level,
      levelOverride: (userRow?.level_override ?? null) as Level | null,
      streakDays: userRow?.streak_days ?? 0,
      lastActiveDate: userRow?.last_active_date ?? null,
      topics,
    };
  },

  async getTopicProgress(topicId: string): Promise<TopicProgress | null> {
    const db = await getDb();
    const row = await db.getFirstAsync<any>(`SELECT * FROM topic_progress WHERE topic_id = ?`, [topicId]);
    if (!row) return null;
    return {
      topicId: row.topic_id,
      attempts: row.attempts,
      correct: row.correct,
      recentAccuracy: row.recent_accuracy,
      lastPracticedAt: row.last_practiced_at,
    };
  },

  async setLevelOverride(level: Level | null): Promise<void> {
    const db = await getDb();
    await db.runAsync(`UPDATE user_progress SET level_override = ? WHERE id = 1`, [level]);
  },

  async resetProgress(): Promise<void> {
    await resetProgressDb();
  },

  /**
   * Records one attempt (drill or writing), updates the topic's rolling
   * accuracy from the last ROLLING_WINDOW attempts on that topic, and
   * updates the daily streak. This is the only write path practice
   * screens should use.
   */
  async recordAttempt(input: Omit<AttemptRecord, 'id' | 'timestamp'>): Promise<void> {
    const db = await getDb();
    const id = `att-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const timestamp = Date.now();

    await db.runAsync(
      `INSERT INTO attempt_records (id, topic_id, item_id, item_type, timestamp, correct, score, user_answer, feedback)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id,
        input.topicId,
        input.itemId,
        input.itemType,
        timestamp,
        input.correct === null ? null : input.correct ? 1 : 0,
        input.score,
        input.userAnswer,
        input.feedback,
      ]
    );

    const recentRows = await db.getAllAsync<any>(
      `SELECT correct, score FROM attempt_records WHERE topic_id = ? ORDER BY timestamp DESC LIMIT ?`,
      [input.topicId, ROLLING_WINDOW]
    );
    const wasCorrectCount = recentRows.filter((r) =>
      r.correct === 1 || (r.correct === null && r.score !== null && r.score >= CORRECT_SCORE_THRESHOLD)
    ).length;
    const recentAccuracy = recentRows.length > 0 ? wasCorrectCount / recentRows.length : 0;

    const totalsRow = await db.getFirstAsync<any>(
      `SELECT COUNT(*) as attempts, SUM(CASE WHEN correct = 1 THEN 1 WHEN correct IS NULL AND score >= ? THEN 1 ELSE 0 END) as correct
       FROM attempt_records WHERE topic_id = ?`,
      [CORRECT_SCORE_THRESHOLD, input.topicId]
    );

    await db.runAsync(
      `INSERT INTO topic_progress (topic_id, attempts, correct, recent_accuracy, last_practiced_at)
       VALUES (?, ?, ?, ?, ?)
       ON CONFLICT(topic_id) DO UPDATE SET attempts = excluded.attempts, correct = excluded.correct, recent_accuracy = excluded.recent_accuracy, last_practiced_at = excluded.last_practiced_at`,
      [input.topicId, totalsRow?.attempts ?? 0, totalsRow?.correct ?? 0, recentAccuracy, timestamp]
    );

    await this.touchStreak();
  },

  async touchStreak(): Promise<void> {
    const db = await getDb();
    const row = await db.getFirstAsync<any>(`SELECT streak_days, last_active_date FROM user_progress WHERE id = 1`);
    const today = todayIso();
    const last = row?.last_active_date as string | null;
    let streak = row?.streak_days ?? 0;

    if (!last) {
      streak = 1;
    } else if (last === today) {
      // already counted today
    } else if (daysBetween(last, today) === 1) {
      streak = streak + 1;
    } else {
      streak = 1;
    }

    await db.runAsync(`UPDATE user_progress SET streak_days = ?, last_active_date = ? WHERE id = 1`, [streak, today]);
  },
};
