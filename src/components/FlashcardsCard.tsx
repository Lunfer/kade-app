import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native';
import { colors, textStyles, spacing, radii, shadow, fontFamilies } from '../theme';
import { Word } from '../data/types';

interface FlashcardsCardProps {
  words: Word[];
  visible: boolean;
  onClose: () => void;
}

type Direction = 'nl-to-en' | 'en-to-nl';

interface DeckCard {
  word: Word;
  direction: Direction;
}

function shuffled<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Fresh shuffled deck: every word once, each with a randomly picked prompt direction. */
function buildDeck(words: Word[]): DeckCard[] {
  return shuffled(words).map((word) => ({
    word,
    direction: Math.random() < 0.5 ? 'nl-to-en' : 'en-to-nl',
  }));
}

/**
 * A fading overlay (same idiom as VerbConjugationCard) for Anki-style
 * flashcard drilling over the vocabulary the user has seen so far. No
 * timer, no scoring: tap once to reveal the answer, tap again to move on.
 * The deck reshuffles (new order, new prompt directions) every time it's
 * opened, and loops with a fresh shuffle when it runs out.
 */
export function FlashcardsCard({ words, visible, onClose }: FlashcardsCardProps) {
  const [deck, setDeck] = useState<DeckCard[]>([]);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (visible) {
      setDeck(buildDeck(words));
      setIndex(0);
      setRevealed(false);
    }
  }, [visible, words]);

  const current = deck[index] ?? null;

  function handleTap() {
    if (!current) return;
    if (!revealed) {
      setRevealed(true);
      return;
    }
    const next = index + 1;
    if (next >= deck.length) {
      setDeck(buildDeck(words));
      setIndex(0);
    } else {
      setIndex(next);
    }
    setRevealed(false);
  }

  const promptIsDutch = current?.direction === 'nl-to-en';
  const prompt = current ? (promptIsDutch ? current.word.nl : current.word.en) : '';
  const answer = current ? (promptIsDutch ? current.word.en : current.word.nl) : '';

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable style={styles.backdrop} onPress={onClose} />
      <View style={styles.centerWrap} pointerEvents="box-none">
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={[textStyles.heading, styles.title]}>Flashcards</Text>
            <Pressable onPress={onClose} hitSlop={12} style={styles.closeButton}>
              <Text style={styles.closeText}>{'✕'}</Text>
            </Pressable>
          </View>

          {!current ? (
            <Text style={[textStyles.body, styles.empty]}>No words to practice yet.</Text>
          ) : (
            <>
              <Text style={[textStyles.caption, styles.progress]}>
                {index + 1} / {deck.length}
              </Text>

              <Pressable
                onPress={handleTap}
                style={({ pressed }) => [styles.flashArea, pressed && styles.flashAreaPressed]}
              >
                <Text
                  key={`prompt-${current.word.id}-${current.direction}`}
                  style={[promptIsDutch ? styles.dutchText : styles.englishText, styles.promptText]}
                >
                  {prompt}
                </Text>

                {revealed ? (
                  <React.Fragment key={`answer-wrap-${current.word.id}-${current.direction}`}>
                    <View style={styles.divider} />
                    <Text
                      key={`answer-${current.word.id}-${current.direction}`}
                      style={promptIsDutch ? styles.englishText : styles.dutchText}
                    >
                      {answer}
                    </Text>
                  </React.Fragment>
                ) : (
                  <Text key={`hint-${current.word.id}-${current.direction}`} style={[textStyles.caption, styles.tapHint]}>
                    Tap to reveal
                  </Text>
                )}
              </Pressable>

              {revealed && (
                <Text style={[textStyles.caption, styles.tapHint]}>Tap the card again for the next word</Text>
              )}
            </>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(43, 33, 24, 0.45)',
  },
  centerWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: colors.surfaceRaised,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    ...shadow.card,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  title: { color: colors.brick },
  closeButton: {
    width: 28,
    height: 28,
    borderRadius: radii.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  closeText: { color: colors.textSecondary, fontSize: 14 },
  progress: { color: colors.textFaded, textAlign: 'center', marginBottom: spacing.sm },
  flashArea: {
    minHeight: 200,
    backgroundColor: colors.tealTint,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
  },
  flashAreaPressed: { backgroundColor: colors.tealTint, opacity: 0.85 },
  promptText: { textAlign: 'center' },
  dutchText: {
    fontFamily: fontFamilies.displayBold,
    fontSize: 28,
    lineHeight: 34,
    color: colors.brick,
    textAlign: 'center',
  },
  englishText: {
    fontFamily: fontFamilies.body,
    fontSize: 18,
    lineHeight: 24,
    fontStyle: 'italic',
    color: colors.textSecondary,
    textAlign: 'center',
  },
  divider: {
    width: 48,
    height: 1,
    backgroundColor: colors.borderStrong,
    marginVertical: spacing.md,
  },
  tapHint: { color: colors.teal, marginTop: spacing.md, textAlign: 'center' },
  empty: { color: colors.textFaded, textAlign: 'center', paddingVertical: spacing.xl },
});
