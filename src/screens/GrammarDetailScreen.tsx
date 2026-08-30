import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder, useWindowDimensions } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScreenContainer } from '../components/ScreenContainer';
import { GlossedSentence } from '../components/GlossedSentence';
import { GrammarExplanationText } from '../components/GrammarExplanationText';
import { colors, textStyles, spacing, radii } from '../theme';
import { topicsRepo } from '../data/repositories/content';
import { GrammarTopic } from '../data/types';
import { GrammarStackParamList } from '../navigation/RootNavigator';

const SWIPE_DISTANCE_THRESHOLD = 60;
const SWIPE_VELOCITY_THRESHOLD = 0.35;
const RESIST_FACTOR = 3;

export function GrammarDetailScreen() {
  const route = useRoute<RouteProp<GrammarStackParamList, 'GrammarDetail'>>();
  const navigation = useNavigation<NativeStackNavigationProp<GrammarStackParamList>>();
  const { width: screenWidth } = useWindowDimensions();
  const { topicId, topics: topicList } = route.params;

  // When we arrived from the list, topicList is the same filtered/ordered set the user was
  // browsing — looking a topic up in it is synchronous, so swiping can animate immediately
  // with no fetch lag. Falls back to a DB fetch for deep links that skip the list (no topicList).
  const [fetchedTopic, setFetchedTopic] = useState<GrammarTopic | null>(null);

  useEffect(() => {
    if (!topicList) {
      topicsRepo.getById(topicId).then(setFetchedTopic);
    }
  }, [topicId, topicList]);

  const topic = topicList ? topicList.find((t) => t.id === topicId) ?? null : fetchedTopic;

  const currentIndex = topicList ? topicList.findIndex((t) => t.id === topicId) : -1;
  const prevTopic = topicList && currentIndex > 0 ? topicList[currentIndex - 1] : null;
  const nextTopic =
    topicList && currentIndex >= 0 && currentIndex < topicList.length - 1
      ? topicList[currentIndex + 1]
      : null;

  // Refs so the PanResponder (created once) always sees the current siblings/width,
  // instead of the stale values from whichever render first created it.
  const prevTopicRef = useRef(prevTopic);
  const nextTopicRef = useRef(nextTopic);
  const screenWidthRef = useRef(screenWidth);
  prevTopicRef.current = prevTopic;
  nextTopicRef.current = nextTopic;
  screenWidthRef.current = screenWidth;

  const translateX = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  const goTo = (target: GrammarTopic, direction: 'next' | 'prev') => {
    const exitTo = direction === 'next' ? -screenWidthRef.current : screenWidthRef.current;
    Animated.parallel([
      Animated.timing(translateX, { toValue: exitTo, duration: 160, useNativeDriver: true }),
      Animated.timing(opacity, { toValue: 0, duration: 160, useNativeDriver: true }),
    ]).start(() => {
      navigation.setParams({ topicId: target.id });
      translateX.setValue(direction === 'next' ? screenWidthRef.current : -screenWidthRef.current);
      Animated.parallel([
        Animated.timing(translateX, { toValue: 0, duration: 200, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 1, duration: 200, useNativeDriver: true }),
      ]).start();
    });
  };

  const snapBack = () => {
    Animated.parallel([
      Animated.spring(translateX, { toValue: 0, useNativeDriver: true, bounciness: 6 }),
      Animated.timing(opacity, { toValue: 1, duration: 150, useNativeDriver: true }),
    ]).start();
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_evt, gesture) =>
        Math.abs(gesture.dx) > 12 && Math.abs(gesture.dx) > Math.abs(gesture.dy) * 1.5,
      onPanResponderMove: (_evt, gesture) => {
        let dx = gesture.dx;
        if (dx < 0 && !nextTopicRef.current) dx = dx / RESIST_FACTOR;
        if (dx > 0 && !prevTopicRef.current) dx = dx / RESIST_FACTOR;
        translateX.setValue(dx);
      },
      onPanResponderRelease: (_evt, gesture) => {
        const swipedLeft =
          gesture.dx < -SWIPE_DISTANCE_THRESHOLD || gesture.vx < -SWIPE_VELOCITY_THRESHOLD;
        const swipedRight =
          gesture.dx > SWIPE_DISTANCE_THRESHOLD || gesture.vx > SWIPE_VELOCITY_THRESHOLD;
        if (swipedLeft && nextTopicRef.current) {
          goTo(nextTopicRef.current, 'next');
        } else if (swipedRight && prevTopicRef.current) {
          goTo(prevTopicRef.current, 'prev');
        } else {
          snapBack();
        }
      },
      onPanResponderTerminate: () => snapBack(),
    })
  ).current;

  return (
    <ScreenContainer>
      <Animated.View style={{ transform: [{ translateX }], opacity }} {...panResponder.panHandlers}>
        {!topic ? (
          <Text style={textStyles.body}>Loading…</Text>
        ) : (
          <>
            <Text style={[textStyles.displayMedium, styles.title]}>{topic.title}</Text>

            {topicList && topicList.length > 1 && (
              <Text style={[textStyles.caption, styles.progress]}>
                {currentIndex + 1} / {topicList.length}
              </Text>
            )}

            <GrammarExplanationText
              text={topic.explanation}
              style={!(topicList && topicList.length > 1) ? styles.explanationSpacing : undefined}
            />

            <Text style={[textStyles.caption, styles.examplesLabel]}>EXAMPLES</Text>
            <View style={styles.examples}>
              {topic.examples.map((ex, i) => (
                <View key={i} style={styles.exampleRow}>
                  <GlossedSentence nl={ex.nl} en={ex.en} />
                </View>
              ))}
            </View>
          </>
        )}
      </Animated.View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.brick, marginBottom: spacing.xs },
  progress: { color: colors.textFaded, marginBottom: spacing.lg },
  explanationSpacing: { marginTop: spacing.md },
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
