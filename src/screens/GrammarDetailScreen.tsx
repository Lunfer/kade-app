import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ScreenContainer } from '../components/ScreenContainer';
import { GlossedSentence } from '../components/GlossedSentence';
import { GrammarExplanationText } from '../components/GrammarExplanationText';
import { colors, textStyles, spacing, radii } from '../theme';
import { topicsRepo } from '../data/repositories/content';
import { GrammarTopic } from '../data/types';
import { GrammarStackParamList } from '../navigation/RootNavigator';

export function GrammarDetailScreen() {
  const route = useRoute<RouteProp<GrammarStackParamList, 'GrammarDetail'>>();
  const [topic, setTopic] = useState<GrammarTopic | null>(null);

  useEffect(() => {
    topicsRepo.getById(route.params.topicId).then(setTopic);
  }, [route.params.topicId]);

  if (!topic) {
    return (
      <ScreenContainer>
        <Text style={textStyles.body}>Loading…</Text>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <Text style={[textStyles.displayMedium, styles.title]}>{topic.title}</Text>

      <GrammarExplanationText text={topic.explanation} />

      <Text style={[textStyles.caption, styles.examplesLabel]}>EXAMPLES</Text>
      <View style={styles.examples}>
        {topic.examples.map((ex, i) => (
          <View key={i} style={styles.exampleRow}>
            <GlossedSentence nl={ex.nl} en={ex.en} />
          </View>
        ))}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.brick, marginBottom: spacing.lg },
  examplesLabel: { color: colors.textFaded, marginTop: spacing.md, marginBottom: spacing.sm, letterSpacing: 0.5 },
  examples: { gap: spacing.sm },
  exampleRow: {
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
});
