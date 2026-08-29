import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ScreenContainer } from '../components/ScreenContainer';
import { GabledCard } from '../components/GabledCard';
import { colors, textStyles, spacing } from '../theme';
import { useUserProgress } from '../hooks/useUserProgress';
import { topicsRepo } from '../data/repositories/content';
import { GrammarTopic } from '../data/types';
import { weightForTopic } from '../engine/quizEngine';

export function HomeScreen() {
  const { progress } = useUserProgress();
  const [topics, setTopics] = useState<GrammarTopic[]>([]);

  useFocusEffect(
    useCallback(() => {
      topicsRepo.getAll().then(setTopics);
    }, [])
  );

  const level = progress?.levelOverride ?? progress?.currentLevel ?? 'A1';
  const levelTopics = topics.filter((t) => t.level === level);

  const weakestTopic = levelTopics
    .map((t) => ({ topic: t, weight: weightForTopic(progress?.topics[t.id]) }))
    .sort((a, b) => b.weight - a.weight)[0]?.topic;

  const totalAttempts = progress ? Object.values(progress.topics).reduce((s, t) => s + t.attempts, 0) : 0;
  const totalCorrect = progress ? Object.values(progress.topics).reduce((s, t) => s + t.correct, 0) : 0;
  const overallAccuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : null;

  return (
    <ScreenContainer>
      <Text style={[textStyles.displayLarge, styles.title]}>Kade</Text>
      <Text style={[textStyles.body, styles.subtitle]}>Your Dutch, one canal house at a time.</Text>

      <GabledCard accentColor={colors.brick} style={styles.card}>
        <Text style={[textStyles.caption, styles.cardLabel]}>CURRENT LEVEL</Text>
        <Text style={[textStyles.displayMedium, styles.cardValue]}>{level}</Text>
      </GabledCard>

      <View style={styles.row}>
        <GabledCard accentColor={colors.teal} style={[styles.card, styles.halfCard]}>
          <Text style={[textStyles.caption, styles.cardLabel]}>STREAK</Text>
          <Text style={[textStyles.displayMedium, styles.cardValue]}>
            {progress?.streakDays ?? 0} {progress?.streakDays === 1 ? 'day' : 'days'}
          </Text>
        </GabledCard>
        <GabledCard accentColor={colors.brass} style={[styles.card, styles.halfCard]}>
          <Text style={[textStyles.caption, styles.cardLabel]}>ACCURACY</Text>
          <Text style={[textStyles.displayMedium, styles.cardValue]}>
            {overallAccuracy === null ? '—' : `${overallAccuracy}%`}
          </Text>
        </GabledCard>
      </View>

      {weakestTopic ? (
        <GabledCard accentColor={colors.brickDark} style={styles.card}>
          <Text style={[textStyles.caption, styles.cardLabel]}>PRACTICE TODAY</Text>
          <Text style={[textStyles.heading, styles.cardValue]}>{weakestTopic.title}</Text>
          <Text style={[textStyles.bodySmall, styles.cardHint]}>
            This is where the Practice tab will focus your next session.
          </Text>
        </GabledCard>
      ) : null}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.brick },
  subtitle: { color: colors.textSecondary, marginTop: spacing.xs, marginBottom: spacing.xl },
  card: { marginBottom: spacing.lg },
  row: { flexDirection: 'row', gap: spacing.lg },
  halfCard: { flex: 1 },
  cardLabel: { color: colors.textFaded, letterSpacing: 0.5 },
  cardValue: { color: colors.textPrimary, marginTop: spacing.xs },
  cardHint: { color: colors.textSecondary, marginTop: spacing.sm },
});
