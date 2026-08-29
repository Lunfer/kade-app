import React, { useCallback, useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScreenContainer } from '../components/ScreenContainer';
import { colors, textStyles, spacing, radii } from '../theme';
import { topicsRepo } from '../data/repositories/content';
import { GrammarTopic, Level } from '../data/types';
import { GrammarStackParamList } from '../navigation/RootNavigator';

const LEVELS: Level[] = ['A0', 'A1', 'A2', 'B1', 'B2'];

const CATEGORY_LABEL: Record<string, string> = {
  verb: 'Verb',
  'word-order': 'Word order',
  article: 'Article',
  preposition: 'Preposition',
  pronoun: 'Pronoun',
  possessive: 'Possessive',
  comparison: 'Comparison',
  conjunction: 'Conjunction',
  other: 'Other',
};

export function GrammarListScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<GrammarStackParamList>>();
  const [topics, setTopics] = useState<GrammarTopic[]>([]);
  const [level, setLevel] = useState<Level>('A1');

  useFocusEffect(
    useCallback(() => {
      topicsRepo.getAll().then(setTopics);
    }, [])
  );

  const shown = topics.filter((t) => t.level === level);
  const availableLevels = LEVELS.filter((l) => topics.some((t) => t.level === l));

  return (
    <ScreenContainer>
      <Text style={[textStyles.displayMedium, styles.title]}>Grammar reference</Text>
      <View style={styles.levelRow}>
        {LEVELS.map((l) => {
          const has = availableLevels.includes(l);
          const active = l === level;
          return (
            <Pressable
              key={l}
              disabled={!has}
              onPress={() => setLevel(l)}
              style={[styles.levelChip, active && styles.levelChipActive, !has && styles.levelChipDisabled]}
            >
              <Text style={[textStyles.caption, active ? styles.levelTextActive : styles.levelText]}>{l}</Text>
            </Pressable>
          );
        })}
      </View>

      {shown.length === 0 ? (
        <Text style={[textStyles.body, styles.empty]}>No content for this level yet.</Text>
      ) : (
        shown.map((topic) => (
          <Pressable
            key={topic.id}
            style={styles.row}
            onPress={() => navigation.navigate('GrammarDetail', { topicId: topic.id })}
          >
            <View style={styles.rowText}>
              <Text style={[textStyles.subheading, styles.rowTitle]}>{topic.title}</Text>
              <Text style={[textStyles.caption, styles.rowCategory]}>{CATEGORY_LABEL[topic.category]}</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </Pressable>
        ))
      )}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.brick, marginBottom: spacing.lg },
  levelRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.lg, flexWrap: 'wrap' },
  levelChip: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    borderRadius: radii.pill,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  levelChipActive: { backgroundColor: colors.brick, borderColor: colors.brick },
  levelChipDisabled: { opacity: 0.4 },
  levelText: { color: colors.textSecondary },
  levelTextActive: { color: colors.textOnBrick },
  empty: { color: colors.textFaded, marginTop: spacing.xl, textAlign: 'center' },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  rowText: { flex: 1 },
  rowTitle: { color: colors.textPrimary },
  rowCategory: { color: colors.teal, marginTop: 2 },
  chevron: { color: colors.textFaded, fontSize: 20 },
});
