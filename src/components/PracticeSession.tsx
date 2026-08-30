import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from './Button';
import { colors, textStyles, spacing, radii, fontFamilies } from '../theme';
import { topicsRepo, drillsRepo, writingPromptsRepo } from '../data/repositories/content';
import { progressRepo } from '../data/repositories/progress';
import { DrillItem, Level, WritingPrompt } from '../data/types';
import { buildPracticeQueue, gradeDrillAnswer, joinTokens, PracticeQueueItem } from '../engine/quizEngine';
import { gradeSentence, GradeResponse } from '../api/gradingApi';

const QUEUE_LENGTH = 10;

type Phase = 'loading' | 'answering' | 'checking' | 'feedback' | 'done' | 'empty';

// The live practice/drill session, embedded inline (e.g. inside the Home
// screen's "Practice Today" card) rather than shown as its own screen.
// `level` is the effective level (levelOverride ?? currentLevel) computed
// by the caller -- the queue is built only from that level's topics, so
// practice always matches what the Settings screen's level picker shows,
// rather than mixing in every level's content regardless of selection.
export function PracticeSession({ level }: { level: Level }) {
  const navigation = useNavigation();
  const [queue, setQueue] = useState<PracticeQueueItem[]>([]);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('loading');
  const [textAnswer, setTextAnswer] = useState('');
  const [tokenPool, setTokenPool] = useState<string[]>([]);
  const [tokenAnswer, setTokenAnswer] = useState<string[]>([]);
  const [drillCorrect, setDrillCorrect] = useState<boolean | null>(null);
  const [writingResult, setWritingResult] = useState<GradeResponse | null>(null);
  const [writingError, setWritingError] = useState<string | null>(null);

  const current = queue[index];

  const startSession = useCallback(async () => {
    setPhase('loading');
    const [allTopics, allDrills, allPrompts, progress] = await Promise.all([
      topicsRepo.getAll(),
      drillsRepo.getAll(),
      writingPromptsRepo.getAll(),
      progressRepo.getUserProgress(),
    ]);

    // Only practice the selected level's topics -- otherwise a beginner on
    // A0 gets quizzed on A1 grammar (or vice versa) regardless of what the
    // Settings screen's level picker says.
    const topics = allTopics.filter((t) => t.level === level);

    const drillsByTopic = new Map<string, DrillItem[]>();
    for (const d of allDrills) {
      const list = drillsByTopic.get(d.topicId) ?? [];
      list.push(d);
      drillsByTopic.set(d.topicId, list);
    }
    const writingPromptsByTopic = new Map<string, WritingPrompt[]>();
    for (const p of allPrompts) {
      for (const topicId of p.topicIds) {
        const list = writingPromptsByTopic.get(topicId) ?? [];
        list.push(p);
        writingPromptsByTopic.set(topicId, list);
      }
    }

    const newQueue = buildPracticeQueue({
      topics,
      drillsByTopic,
      writingPromptsByTopic,
      topicProgress: progress.topics,
      length: QUEUE_LENGTH,
    });

    setQueue(newQueue);
    setIndex(0);
    setPhase(newQueue.length === 0 ? 'empty' : 'answering');
  }, [level]);

  useEffect(() => {
    startSession();
  }, [startSession]);

  useEffect(() => {
    setTextAnswer('');
    setDrillCorrect(null);
    setWritingResult(null);
    setWritingError(null);
    if (current?.kind === 'drill' && current.drill.type === 'word-order') {
      const tokens = (current.drill.data as { tokens: string[] }).tokens;
      setTokenPool(shuffle(tokens));
      setTokenAnswer([]);
    }
  }, [current]);

  const advance = useCallback(() => {
    if (index + 1 >= queue.length) {
      setPhase('done');
    } else {
      setIndex((i) => i + 1);
      setPhase('answering');
    }
  }, [index, queue.length]);

  // Moves on to the next item without grading or recording an attempt, so
  // skipped items don't count against (or for) the topic's accuracy.
  const skipCurrent = useCallback(() => {
    advance();
  }, [advance]);

  // Jumps to the Grammar tab's detail screen for the current item's topic,
  // so a "?" next to a wrong answer can point straight at the grammar
  // explanation that explains why it's wrong. The bottom tab navigator
  // isn't given a typed param list, so this crosses tabs with an
  // untyped nested-navigate call (same pattern React Navigation docs use
  // for cross-tab navigation without a shared root param list).
  const viewExplanation = useCallback(() => {
    if (!current) return;
    (navigation as any).navigate('Grammar', {
      screen: 'GrammarDetail',
      params: { topicId: current.topic.id },
    });
  }, [navigation, current]);

  if (phase === 'loading') {
    return (
      <View style={styles.centered}>
        <ActivityIndicator color={colors.brick} />
      </View>
    );
  }

  if (phase === 'empty') {
    return (
      <View style={styles.centered}>
        <Text style={[textStyles.subheading, styles.mutedText]}>Nothing to practice yet</Text>
        <Text style={[textStyles.bodySmall, styles.mutedText, { marginTop: spacing.xs }]}>
          Content for your current level isn't loaded yet.
        </Text>
      </View>
    );
  }

  if (phase === 'done') {
    return (
      <View>
        <Text style={[textStyles.subheading, { color: colors.textPrimary }]}>Session complete</Text>
        <Text style={[textStyles.bodySmall, styles.mutedText, { marginTop: spacing.xs }]}>
          You practiced {queue.length} items. Nice work.
        </Text>
        <Button title="Practice again" onPress={startSession} style={{ marginTop: spacing.sm }} />
      </View>
    );
  }

  const submitDrill = async (answer: string) => {
    if (current.kind !== 'drill') return;
    const correct = gradeDrillAnswer(current.drill, answer);
    setDrillCorrect(correct);
    setPhase('feedback');
    await progressRepo.recordAttempt({
      topicId: current.topic.id,
      itemId: current.drill.id,
      itemType: 'drill',
      correct,
      score: null,
      userAnswer: answer,
      feedback: null,
    });
  };

  const submitWriting = async () => {
    if (current.kind !== 'writing' || textAnswer.trim().length === 0) return;
    setPhase('checking');
    setWritingError(null);
    try {
      const result = await gradeSentence({
        sentence: textAnswer.trim(),
        targetGrammarPoints: current.prompt.targetGrammarPoints,
        promptText: current.prompt.promptText,
      });
      setWritingResult(result);
      setPhase('feedback');
      await progressRepo.recordAttempt({
        topicId: current.topic.id,
        itemId: current.prompt.id,
        itemType: 'writing',
        correct: result.correct,
        score: result.score,
        userAnswer: textAnswer.trim(),
        feedback: result.explanation,
      });
    } catch (err) {
      setWritingError((err as Error).message);
      setPhase('answering');
    }
  };

  return (
    <View>
      <Text style={[textStyles.caption, styles.progressLabel]}>
        {index + 1} / {queue.length} · {current.topic.title}
      </Text>

      {current.kind === 'drill' ? (
        <DrillCard
          drill={current.drill}
          phase={phase}
          textAnswer={textAnswer}
          setTextAnswer={setTextAnswer}
          tokenPool={tokenPool}
          tokenAnswer={tokenAnswer}
          setTokenPool={setTokenPool}
          setTokenAnswer={setTokenAnswer}
          drillCorrect={drillCorrect}
          onSubmitText={() => submitDrill(textAnswer)}
          onSubmitOption={(opt) => submitDrill(opt)}
          onSubmitTokens={() => submitDrill(joinTokens(tokenAnswer))}
          onSkip={skipCurrent}
          onViewExplanation={viewExplanation}
        />
      ) : (
        <WritingCard
          prompt={current.prompt}
          phase={phase}
          textAnswer={textAnswer}
          setTextAnswer={setTextAnswer}
          result={writingResult}
          error={writingError}
          onSubmit={submitWriting}
          onSkip={skipCurrent}
          onViewExplanation={viewExplanation}
        />
      )}

      {phase === 'feedback' && <Button title="Next" onPress={advance} style={{ marginTop: spacing.sm }} />}
    </View>
  );
}

function DrillCard(props: {
  drill: DrillItem;
  phase: Phase;
  textAnswer: string;
  setTextAnswer: (s: string) => void;
  tokenPool: string[];
  tokenAnswer: string[];
  setTokenPool: (t: string[]) => void;
  setTokenAnswer: (t: string[]) => void;
  drillCorrect: boolean | null;
  onSubmitText: () => void;
  onSubmitOption: (opt: string) => void;
  onSubmitTokens: () => void;
  onSkip: () => void;
  onViewExplanation: () => void;
}) {
  const {
    drill,
    phase,
    textAnswer,
    setTextAnswer,
    tokenPool,
    tokenAnswer,
    setTokenPool,
    setTokenAnswer,
    drillCorrect,
    onSubmitText,
    onSubmitOption,
    onSubmitTokens,
    onSkip,
    onViewExplanation,
  } = props;
  const answered = phase === 'feedback';

  return (
    <View>
      <Text style={[textStyles.heading, styles.prompt]}>{drill.prompt}</Text>

      {drill.type === 'multiple-choice' && (
        <View style={styles.optionsWrap}>
          {(drill.data as { options: string[] }).options.map((opt) => (
            <Pressable key={opt} disabled={answered} onPress={() => onSubmitOption(opt)} style={styles.optionButton}>
              <Text style={[textStyles.subheading, styles.optionText]}>{opt}</Text>
            </Pressable>
          ))}
        </View>
      )}

      {(drill.type === 'conjugation' || drill.type === 'fill-blank') && (
        <View>
          {drill.type === 'fill-blank' && (
            <Text style={[textStyles.body, styles.mutedText]}>{(drill.data as { sentence: string }).sentence}</Text>
          )}
          <TextInput
            editable={!answered}
            value={textAnswer}
            onChangeText={setTextAnswer}
            placeholder="Type your answer"
            placeholderTextColor={colors.textFaded}
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      )}

      {drill.type === 'word-order' && (
        <View>
          <View style={styles.tokenAnswerRow}>
            {tokenAnswer.map((t, i) => (
              <Pressable
                key={i}
                disabled={answered}
                onPress={() => {
                  setTokenAnswer(tokenAnswer.filter((_, idx) => idx !== i));
                  setTokenPool([...tokenPool, t]);
                }}
                style={styles.tokenChipFilled}
              >
                <Text style={styles.tokenText}>{t}</Text>
              </Pressable>
            ))}
          </View>
          <View style={styles.tokenPoolRow}>
            {tokenPool.map((t, i) => (
              <Pressable
                key={i}
                disabled={answered}
                onPress={() => {
                  setTokenPool(tokenPool.filter((_, idx) => idx !== i));
                  setTokenAnswer([...tokenAnswer, t]);
                }}
                style={styles.tokenChip}
              >
                <Text style={styles.tokenText}>{t}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      )}

      {!answered && (
        <View style={styles.actionRow}>
          <Button title="Skip" variant="ghost" onPress={onSkip} style={styles.actionButton} />
          {(drill.type === 'conjugation' || drill.type === 'fill-blank') && (
            <Button title="Check" onPress={onSubmitText} style={styles.actionButton} textColor="#FFFFFF" />
          )}
          {drill.type === 'word-order' && (
            <Button
              title="Check"
              onPress={onSubmitTokens}
              disabled={tokenPool.length > 0}
              style={styles.actionButton}
              textColor="#FFFFFF"
            />
          )}
        </View>
      )}

      {answered && (
        <View style={[styles.feedbackBox, drillCorrect ? styles.feedbackCorrect : styles.feedbackWrong]}>
          <Text style={textStyles.subheading}>{drillCorrect ? 'Correct!' : 'Not quite.'}</Text>
          {!drillCorrect && (
            <View style={styles.answerRow}>
              <Text style={[textStyles.bodySmall, styles.mutedText]}>
                Correct answer: {drill.correctAnswers[0]}
              </Text>
              <Pressable
                onPress={onViewExplanation}
                style={styles.explainButton}
                hitSlop={8}
                accessibilityRole="button"
                accessibilityLabel="Why is this the correct answer?"
              >
                <Text style={styles.explainButtonText}>?</Text>
              </Pressable>
            </View>
          )}
        </View>
      )}
    </View>
  );
}

function WritingCard(props: {
  prompt: WritingPrompt;
  phase: Phase;
  textAnswer: string;
  setTextAnswer: (s: string) => void;
  result: GradeResponse | null;
  error: string | null;
  onSubmit: () => void;
  onSkip: () => void;
  onViewExplanation: () => void;
}) {
  const { prompt, phase, textAnswer, setTextAnswer, result, error, onSubmit, onSkip, onViewExplanation } = props;
  const answered = phase === 'feedback';
  const checking = phase === 'checking';

  return (
    <View>
      <Text style={[textStyles.caption, styles.mutedText]}>WRITING PROMPT</Text>
      <Text style={[textStyles.heading, styles.prompt]}>{prompt.promptText}</Text>
      <Text style={[textStyles.bodySmall, styles.mutedText]}>{prompt.promptTextEn}</Text>

      <TextInput
        editable={!answered && !checking}
        value={textAnswer}
        onChangeText={setTextAnswer}
        placeholder="Schrijf hier je zin..."
        placeholderTextColor={colors.textFaded}
        style={[styles.input, styles.multilineInput]}
        multiline
        autoCorrect={false}
      />

      {error && <Text style={[textStyles.bodySmall, styles.errorText]}>{error}</Text>}

      {!answered && (
        <View style={styles.actionRow}>
          <Button title="Skip" variant="ghost" onPress={onSkip} disabled={checking} style={styles.actionButton} />
          <Button
            title={checking ? 'Checking…' : 'Submit'}
            onPress={onSubmit}
            loading={checking}
            style={styles.actionButton}
            textColor="#FFFFFF"
          />
        </View>
      )}

      {answered && result && (
        <View style={[styles.feedbackBox, result.correct ? styles.feedbackCorrect : styles.feedbackWrong]}>
          <Text style={textStyles.subheading}>{result.correct ? 'Correct!' : `Score: ${result.score}/100`}</Text>
          {!result.correct && (
            <View style={styles.answerRow}>
              <Text style={[textStyles.bodySmall, styles.mutedText]}>Corrected: {result.correctedSentence}</Text>
              <Pressable
                onPress={onViewExplanation}
                style={styles.explainButton}
                hitSlop={8}
                accessibilityRole="button"
                accessibilityLabel="Why is this the correct answer?"
              >
                <Text style={styles.explainButtonText}>?</Text>
              </Pressable>
            </View>
          )}
          <Text style={[textStyles.bodySmall, styles.mutedText, { marginTop: spacing.xs }]}>{result.explanation}</Text>
        </View>
      )}
    </View>
  );
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const styles = StyleSheet.create({
  centered: { alignItems: 'center', paddingVertical: spacing.lg },
  progressLabel: { color: colors.textFaded, marginBottom: spacing.sm, letterSpacing: 0.5 },
  prompt: { color: colors.textPrimary, marginBottom: spacing.sm },
  mutedText: { color: colors.textSecondary },
  errorText: { color: colors.error, marginTop: spacing.sm },
  optionsWrap: { gap: spacing.sm },
  optionButton: {
    backgroundColor: colors.surfaceRaised,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.md,
    padding: spacing.md,
  },
  optionText: { color: colors.textPrimary },
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.md,
    padding: spacing.md,
    color: colors.textPrimary,
    fontSize: 16,
  },
  multilineInput: { minHeight: 90, textAlignVertical: 'top' },
  tokenAnswerRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    minHeight: 40,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: spacing.sm,
    marginBottom: spacing.sm,
  },
  tokenPoolRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  tokenChip: {
    backgroundColor: colors.tealTint,
    borderRadius: radii.pill,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  tokenChipFilled: {
    backgroundColor: colors.brickTint,
    borderRadius: radii.pill,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  tokenText: { color: colors.textPrimary },
  // Shared row for the primary action (Check/Submit) plus the Skip button,
  // so skipping is always available right where the answer controls are,
  // without requiring an item to be submitted for checking first.
  actionRow: { flexDirection: 'row', gap: spacing.sm, marginTop: spacing.sm },
  actionButton: { flex: 1 },
  feedbackBox: { marginTop: spacing.md, padding: spacing.md, borderRadius: radii.md },
  feedbackCorrect: { backgroundColor: colors.successTint },
  feedbackWrong: { backgroundColor: colors.errorTint },
  // Correct-answer line paired with the "?" that jumps to the grammar
  // explanation for why it's correct (and thus why the given answer was
  // wrong).
  answerRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: spacing.xs, marginTop: spacing.xs },
  explainButton: {
    width: 20,
    height: 20,
    borderRadius: radii.pill,
    backgroundColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
  },
  explainButtonText: { color: colors.textOnTeal, fontSize: 12, lineHeight: 14, fontFamily: fontFamilies.bodyBold },
});
