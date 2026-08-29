import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ScreenContainer } from '../components/ScreenContainer';
import { ProgressHouse, accuracyToMastery } from '../components/ProgressHouse';
import { colors, textStyles, spacing, radii } from '../theme';
import { topicsRepo } from '../data/repositories/content';
import { GrammarTopic, Level } from '../data/types';
import { useUserProgress } from '../hooks/useUserProgress';

const LEVELS: Level[] = ['A0', 'A1', 'A2', 'B1', 'B2'];

export function ProgressScreen() {
  const { progress } = useUserProgress();
  const [topics, setTopics] = useState<GrammarTopic[]>([]);

  useFocusEffect(
    useCallback(() => {
      topicsRepo.getAll().then(setTopics);
    }, [])
  );

  return (
    <ScreenContainer>
      <Text style={[textStyles.displayMedium, styles.title]}>Progress</Text>
      <Text style={[textStyles.body, styles.subtitle]}>
        Each house is a grammar topic along the canal. Brighter teal and gold mean stronger mastery.
      </Text>

      {LEVELS.filter((l) => topics.some((t) => t.level === l)).map((level) => (
        <View key={level} style={styles.levelSection}>
          <Text style={[textStyles.subheading, styles.levelLabel]}>{level}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.street}>
            {topics
              .filter((t) => t.level === level)
              .map((topic) => {
                const tp = progress?.topics[topic.id];
                const mastery = accuracyToMastery(tp?.recentAccuracy ?? 0, tp?.attempts ?? 0);
                return <ProgressHouse key={topic.id} label={topic.title} mastery={mastery} />;
              })}
          </ScrollView>
        </View>
      ))}

      <View style={styles.legend}>
        {(['none', 'low', 'mid', 'high', 'done'] as const).map((m) => (
          <View key={m} style={styles.legendItem}>
            <View style={[styles.legendSwatch, { backgroundColor: legendColor(m) }]} />
            <Text style={[textStyles.caption, styles.legendLabel]}>{legendText(m)}</Text>
          </View>
        ))}
      </View>
    </ScreenContainer>
  );
}

function legendColor(m: string) {
  return {
    none: colors.masteryNone,
    low: colors.masteryLow,
    mid: colors.masteryMid,
    high: colors.masteryHigh,
    done: colors.masteryDone,
  }[m as 'none' | 'low' | 'mid' | 'high' | 'done'];
}
function legendText(m: string) {
  return { none: 'Not started', low: 'Weak', mid: 'Practicing', high: 'Strong', done: 'Mastered' }[
    m as 'none' | 'low' | 'mid' | 'high' | 'done'
  ];
}

const styles = StyleSheet.create({
  title: { color: colors.brick, marginBottom: spacing.xs },
  subtitle: { color: colors.textSecondary, marginBottom: spacing.lg },
  levelSection: { marginBottom: spacing.xl },
  levelLabel: { color: colors.textPrimary, marginBottom: spacing.sm },
  street: { gap: spacing.md, paddingBottom: spacing.sm, paddingRight: spacing.md },
  legend: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md, marginTop: spacing.sm },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: spacing.xs },
  legendSwatch: { width: 10, height: 10, borderRadius: radii.sm },
  legendLabel: { color: colors.textSecondary },
});
