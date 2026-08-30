import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import { Button } from './Button';
import { colors, textStyles, spacing, radii } from '../theme';
import { topicsRepo, drillsRepo, writingPromptsRepo } from '../data/repositories/content';
import { progressRepo } from '../data/repositories/progress';
import { DrillItem, WritingPrompt } from '../data/types';
import { buildPracticeQueue, gradeDrillAnswer, joinTokens, PracticeQueueItem } from '../engine/quizEngine';
import { gradeSentence, GradeResponse } from '../api/gradingApi';

const QUEUE_LENGTH = 10;

type Phase = 'loading' | 'answering' | 'checking' | 'feedback' | 'done' | 'empty';

// The live practice/drill session, embedded inline (e.g. inside the Home
// screen's "Practice Today" card) rather than shown as its own screen.
export function PracticeSession() {
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
    const [topics, allDrills, allPrompts, progress] = await Promise.all([
      topicsRepo.getAll(),
      drillsRepo.getAll(),
      writingPromptsRepo.getAll(),
      progressRepo.getUserProgress(),
    ]);

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
  }, []);

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
}) {
  const { drill, phase, textAnswer, setTextAnswer, tokenPool, tokenAnswer, setTokenPool, setTokenAnswer, drillCorrect, onSubmitText, onSubmitOption, onSubmitTokens } = props;
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
          {!answered && <Button title="Check" onPress={onSubmitText} style={{ marginTop: spacing.sm }} />}
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
          {!answered && (
            <Button
              title="Check"
              onPress={onSubmitTokens}
              disabled={tokenPool.length > 0}
              style={{ marginTop: spacing.sm }}
            />
          )}
        </View>
      )}

      {answered && (
        <View style={[styles.feedbackBox, drillCorrect ? styles.feedbackCorrect : styles.feedbackWrong]}>
          <Text style={textStyles.subheading}>{drillCorrect ? 'Correct!' : 'Not quite.'}</Text>
          {!drillCorrect && (
            <Text style={[textStyles.bodySmall, styles.mutedText]}>
              Correct answer: {drill.correctAnswers[0]}
            </Text>
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
}) {
  const { prompt, phase, textAnswer, setTextAnswer, result, error, onSubmit } = props;
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
        <Button title={checking ? 'Checking…' : 'Submit'} onPress={onSubmit} loading={checking} style={{ marginTop: spacing.sm }} />
      )}

      {answered && result && (
        <View style={[styles.feedbackBox, result.correct ? styles.feedbackCorrect : styles.feedbackWrong]}>
          <Text style={textStyles.subheading}>{result.correct ? 'Correct!' : `Score: ${result.score}/100`}</Text>
          {!result.correct && (
            <Text style={[textStyles.bodySmall, styles.mutedText]}>Corrected: {result.correctedSentence}</Text>
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
  feedbackBox: { marginTop: spacing.md, padding: spacing.md, borderRadius: radii.md },
  feedbackCorrect: { backgroundColor: colors.successTint },
  feedbackWrong: { backgroundColor: colors.errorTint },
});
