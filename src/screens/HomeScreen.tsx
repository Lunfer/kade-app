import React, { useCallback, useState } from 'react';
import { View, Text, Image, StyleSheet, ViewStyle, StyleProp, useWindowDimensions } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ScreenContainer } from '../components/ScreenContainer';
import { PracticeSession } from '../components/PracticeSession';
import { colors, textStyles, spacing, radii, fontFamilies } from '../theme';
import { useUserProgress } from '../hooks/useUserProgress';
import { topicsRepo } from '../data/repositories/content';
import { GrammarTopic } from '../data/types';
import { weightForTopic } from '../engine/quizEngine';

// Source illustration is 780x256 -- a full-bleed strip of 7 canal houses.
const HOUSES_ASPECT = 780 / 256;
const HOUSES_CLIP_HEIGHT = 92;

export function HomeScreen() {
  const { progress } = useUserProgress();
  const [topics, setTopics] = useState<GrammarTopic[]>([]);
  const { width: windowWidth } = useWindowDimensions();

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

  // Compute the illustration's natural (un-cropped) render size explicitly
  // in JS rather than via the RN `aspectRatio` style prop -- mixing a
  // percentage width with aspectRatio inside a fixed-height clipped parent
  // was letting Yoga resolve the box far narrower than the full screen
  // width, which zoomed in and cut off the right-hand houses. Pinning both
  // dimensions as literal numbers removes that ambiguity: the image always
  // renders at full window width with height derived from its true aspect
  // ratio, then the shorter fixed-height wrapper crops only the bottom.
  const housesWidth = windowWidth;
  const housesHeight = housesWidth / HOUSES_ASPECT;

  return (
    <ScreenContainer style={styles.screenContent}>
      <Text style={[textStyles.displayLarge, styles.title]}>
        Kade <Text style={[textStyles.wordSubtitle, styles.titlePronunciation]}>(KAH-duh)</Text>
      </Text>
      <Text style={[textStyles.body, styles.subtitle]}>Your Dutch, one canal house at a time.</Text>

      {/* Cascading stat cards -- staggered on purpose, bleeding off the
          right edge of the screen (matches the Canva mock). */}
      <View style={styles.statStack}>
        <StatCard label="Current Level" value={level} color={colors.teal} style={styles.statCurrentLevel} />
        <StatCard
          label="Accuracy"
          value={overallAccuracy === null ? '—' : `${overallAccuracy}%`}
          color={colors.textFaded}
          style={styles.statAccuracy}
        />
        <StatCard
          label="Streak"
          value={`${progress?.streakDays ?? 0} ${progress?.streakDays === 1 ? 'day' : 'days'}`}
          color={colors.brass}
          style={styles.statStreak}
        />
      </View>

      <View style={styles.practiceCard}>
        <Text style={[textStyles.caption, styles.practiceLabel]}>Practice Today</Text>
        <Text style={[textStyles.heading, styles.practiceHeading]}>
          {weakestTopic ? weakestTopic.title : "You're all caught up"}
        </Text>

        <View style={styles.practiceBox}>
          <PracticeSession level={level} />
        </View>
      </View>

      {/* Absorbs any leftover vertical space so the practice card stays
          comfortably sized to its own content instead of stretching, while
          the illustration below still lands flush against the tab bar. */}
      <View style={styles.spacer} />

      {/* Full-bleed illustration strip, clipped to a shorter fixed height so
          it sits flush against the bottom tab bar. The wrapper is
          top-anchored (default flex alignment) and clips via
          overflow:hidden, so the stepped-gable rooflines at the top of the
          source image stay intact and only the lower portion is cut. */}
      <View style={styles.housesClip}>
        <Image
          source={require('../../assets/home-canal-houses.png')}
          style={{ width: housesWidth, height: housesHeight }}
        />
      </View>
    </ScreenContainer>
  );
}

function StatCard({
  label,
  value,
  color,
  style,
}: {
  label: string;
  value: string;
  color: string;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View style={[styles.statCard, { backgroundColor: color }, style]}>
      <Text style={[textStyles.caption, styles.statLabel]}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // Overrides ScreenContainer's shared bottom padding and lets the content
  // stretch to fill the available height, so the trailing spacer can
  // absorb any leftover space and the illustration lands flush at the end.
  screenContent: { flexGrow: 1, paddingBottom: 0 },

  title: { color: colors.brick },
  // Matches the glossed-text convention used elsewhere for translating a
  // Dutch word (see WordText/GlossedSentence, textStyles.wordSubtitle) --
  // reused here for a phonetic gloss instead of a translation.
  titlePronunciation: { color: colors.textFaded },
  subtitle: { color: colors.textSecondary, marginTop: spacing.xs, marginBottom: spacing.lg },

  // Container tall enough to hold the diagonal stack; overflow is left
  // visible on purpose so the cards can bleed past the screen edge.
  statStack: { height: 198, marginBottom: spacing.lg },
  statCard: {
    position: 'absolute',
    borderRadius: radii.md,
    padding: spacing.sm,
  },
  statCurrentLevel: { top: 0, left: '45.8%', width: '61.3%' },
  statAccuracy: { top: 64, left: '55.4%', width: '51.7%' },
  statStreak: { top: 128, left: '40.1%', width: '67%' },
  statLabel: { color: colors.textOnTeal },
  statValue: {
    color: colors.textOnTeal,
    fontFamily: fontFamilies.displayBold,
    fontSize: 20,
    lineHeight: 25,
    marginTop: spacing.xs,
  },

  practiceCard: {
    backgroundColor: colors.surfaceRaised,
    borderWidth: 1,
    borderColor: colors.brass,
    borderRadius: radii.lg,
    padding: spacing.md,
  },
  practiceLabel: { color: colors.textFaded },
  practiceHeading: { color: colors.textPrimary, marginTop: spacing.xs, marginBottom: spacing.sm },
  practiceBox: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.md,
    padding: spacing.sm,
    minHeight: 130,
  },

  spacer: { flexGrow: 1 },

  // Fixed-height clip: shorter than the source image's natural render
  // height, so the bottom gets cropped off while the rooflines at the top
  // stay fully visible. Cancels ScreenContainer's horizontal padding for a
  // full-bleed edge-to-edge strip, and sits as the last child with no
  // bottom margin so it rests flush against the tab bar.
  housesClip: {
    height: HOUSES_CLIP_HEIGHT,
    overflow: 'hidden',
    marginTop: spacing.sm,
    marginHorizontal: -spacing.lg,
  },
});
