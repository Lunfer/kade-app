import React, { useCallback, useRef, useState } from 'react';
import { View, Text, Pressable, StyleSheet, Modal, ScrollView, useWindowDimensions } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScreenContainer } from '../components/ScreenContainer';
import { colors, textStyles, spacing, radii, shadow } from '../theme';
import { topicsRepo } from '../data/repositories/content';
import { GrammarTopic, GrammarCategory, Level } from '../data/types';
import { GrammarStackParamList } from '../navigation/RootNavigator';

const LEVELS: Level[] = ['A0', 'A1', 'A2', 'B1', 'B2'];

const CATEGORY_LABEL: Record<string, string> = {
  verb: 'Verb',
  'word-order': 'Word order',
  article: 'Article',
  adjective: 'Adjective',
  preposition: 'Preposition',
  pronoun: 'Pronoun',
  possessive: 'Possessive',
  comparison: 'Comparison',
  conjunction: 'Conjunction',
  negation: 'Negation',
  question: 'Question',
  diminutive: 'Diminutive',
  pronunciation: 'Pronunciation',
  phrases: 'Phrases',
  vocabulary: 'Vocabulary',
  clause: 'Clause',
  indefinite: 'Indefinite',
  'pronominal-adverb': 'Pronominal adverb',
  other: 'Other',
};

type CategoryFilter = GrammarCategory | 'all';

interface Anchor {
  x: number;
  y: number;
  width: number;
  height: number;
}

const DROPDOWN_WIDTH = 200;
const DROPDOWN_MAX_HEIGHT = 280;

export function GrammarListScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<GrammarStackParamList>>();
  const { width: windowWidth } = useWindowDimensions();
  const [topics, setTopics] = useState<GrammarTopic[]>([]);
  const [level, setLevel] = useState<Level>('A1');
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterAnchor, setFilterAnchor] = useState<Anchor | null>(null);
  const filterChipRef = useRef<View>(null);

  useFocusEffect(
    useCallback(() => {
      topicsRepo.getAll().then(setTopics);
    }, [])
  );

  const availableLevels = LEVELS.filter((l) => topics.some((t) => t.level === l));
  const topicsAtLevel = topics.filter((t) => t.level === level);
  const availableCategories = Array.from(new Set(topicsAtLevel.map((t) => t.category))).sort((a, b) =>
    (CATEGORY_LABEL[a] ?? a).localeCompare(CATEGORY_LABEL[b] ?? b)
  );
  const shown = topicsAtLevel.filter((t) => category === 'all' || t.category === category);

  const selectLevel = (l: Level) => {
    setLevel(l);
    setCategory('all');
    setFilterOpen(false);
  };

  const openFilter = () => {
    filterChipRef.current?.measureInWindow((x, y, width, height) => {
      setFilterAnchor({ x, y, width, height });
      setFilterOpen(true);
    });
  };

  const pickCategory = (c: CategoryFilter) => {
    setCategory(c);
    setFilterOpen(false);
  };

  const filterActive = category !== 'all';
  const filterLabel = filterActive ? CATEGORY_LABEL[category] ?? category : 'Filter';

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
              onPress={() => selectLevel(l)}
              style={[styles.levelChip, active && styles.levelChipActive, !has && styles.levelChipDisabled]}
            >
              <Text style={[textStyles.caption, active ? styles.levelTextActive : styles.levelText]}>{l}</Text>
            </Pressable>
          );
        })}
      </View>

      {availableCategories.length > 0 && (
        <View style={styles.categoryRow}>
          <Pressable
            onPress={() => pickCategory('all')}
            style={[styles.categoryChip, !filterActive && styles.categoryChipActive]}
          >
            <Text style={[textStyles.caption, !filterActive ? styles.categoryTextActive : styles.categoryText]}>
              All
            </Text>
          </Pressable>
          <Pressable
            ref={filterChipRef}
            onPress={openFilter}
            style={[styles.categoryChip, filterActive && styles.categoryChipActive]}
          >
            <Text style={[textStyles.caption, filterActive ? styles.categoryTextActive : styles.categoryText]}>
              {filterLabel} ▾
            </Text>
          </Pressable>
        </View>
      )}

      <Modal visible={filterOpen} transparent animationType="fade" onRequestClose={() => setFilterOpen(false)}>
        <Pressable style={StyleSheet.absoluteFill} onPress={() => setFilterOpen(false)} />
        {filterAnchor && (
          <View
            style={[
              styles.dropdown,
              {
                top: filterAnchor.y + filterAnchor.height + spacing.xs,
                left: Math.max(spacing.lg, Math.min(filterAnchor.x, windowWidth - DROPDOWN_WIDTH - spacing.lg)),
              },
            ]}
          >
            <ScrollView bounces={false} showsVerticalScrollIndicator={availableCategories.length > 6}>
              {availableCategories.map((c) => {
                const active = c === category;
                return (
                  <Pressable
                    key={c}
                    onPress={() => pickCategory(c)}
                    style={[styles.dropdownRow, active && styles.dropdownRowActive]}
                  >
                    <Text style={[textStyles.body, active ? styles.dropdownTextActive : styles.dropdownText]}>
                      {CATEGORY_LABEL[c] ?? c}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>
        )}
      </Modal>

      {shown.length === 0 ? (
        <Text style={[textStyles.body, styles.empty]}>No content for this level yet.</Text>
      ) : (
        shown.map((topic) => (
          <Pressable
            key={topic.id}
            style={styles.row}
            onPress={() => navigation.navigate('GrammarDetail', { topicId: topic.id, topics: shown })}
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
  levelRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.md, flexWrap: 'wrap' },
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
  categoryRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.lg },
  categoryChip: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    borderRadius: radii.pill,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  categoryChipActive: { backgroundColor: colors.teal, borderColor: colors.teal },
  categoryText: { color: colors.textSecondary },
  categoryTextActive: { color: colors.textOnTeal },
  dropdown: {
    position: 'absolute',
    width: DROPDOWN_WIDTH,
    maxHeight: DROPDOWN_MAX_HEIGHT,
    backgroundColor: colors.surfaceRaised,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: spacing.xs,
    overflow: 'hidden',
    ...shadow.card,
  },
  dropdownRow: { paddingVertical: spacing.sm, paddingHorizontal: spacing.md },
  dropdownRowActive: { backgroundColor: colors.tealTint },
  dropdownText: { color: colors.textPrimary },
  dropdownTextActive: { color: colors.tealDark },
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
