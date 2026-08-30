import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import { colors, fontFamilies, spacing, textStyles } from '../theme';

interface GrammarExplanationTextProps {
  /** A GrammarTopic.explanation string -- blank lines = paragraphs, plus inline emphasis markup. */
  text: string;
  style?: StyleProp<TextStyle>;
}

// Matches, in order of appearance, one of: **bold**, __underline__, ==highlight==.
// Non-nested by design -- content is written by hand, so keep the syntax simple
// rather than supporting combinations no author actually needs.
const EMPHASIS_PATTERN = /\*\*(.+?)\*\*|__(.+?)__|==(.+?)==/g;

/**
 * Renders a single explanation paragraph's inline emphasis markup as nested
 * <Text> spans. Kept as a plain function (not a component) so the spans can
 * be inlined directly as children of the paragraph <Text>, which is what
 * lets RN wrap them naturally instead of forcing each onto its own line.
 */
function renderInlineEmphasis(paragraph: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  EMPHASIS_PATTERN.lastIndex = 0;
  while ((match = EMPHASIS_PATTERN.exec(paragraph)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(paragraph.slice(lastIndex, match.index));
    }
    const [, bold, underline, highlight] = match;
    if (bold !== undefined) {
      nodes.push(
        <Text key={`${keyPrefix}-${i++}`} style={styles.bold}>
          {bold}
        </Text>
      );
    } else if (underline !== undefined) {
      nodes.push(
        <Text key={`${keyPrefix}-${i++}`} style={styles.underline}>
          {underline}
        </Text>
      );
    } else if (highlight !== undefined) {
      nodes.push(
        <Text key={`${keyPrefix}-${i++}`} style={styles.highlight}>
          {highlight}
        </Text>
      );
    }
    lastIndex = EMPHASIS_PATTERN.lastIndex;
  }
  if (lastIndex < paragraph.length) {
    nodes.push(paragraph.slice(lastIndex));
  }
  return nodes;
}

/**
 * Renders a GrammarTopic.explanation string: splits on blank lines into
 * paragraphs, and within each paragraph renders **bold**, __underline__,
 * and ==highlight== spans (see the doc comment on GrammarTopic.explanation
 * in src/data/types.ts, and docs/grammar-content-style-guide.md).
 *
 * This is the one place that markup is interpreted -- every screen that
 * shows a topic's explanation should go through this component so the
 * formatting stays visually consistent as more levels are added.
 */
export function GrammarExplanationText({ text, style }: GrammarExplanationTextProps) {
  const paragraphs = text.split('\n\n');
  return (
    <View>
      {paragraphs.map((p, i) => (
        <Text key={i} style={[textStyles.body, styles.paragraph, style]}>
          {renderInlineEmphasis(p, `p${i}`)}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph: { color: colors.textPrimary, marginBottom: spacing.md },
  bold: { fontFamily: fontFamilies.bodySemiBold },
  underline: {
    fontFamily: fontFamilies.bodyMedium,
    textDecorationLine: 'underline',
    textDecorationColor: colors.brick,
    textDecorationStyle: 'solid',
  },
  highlight: {
    backgroundColor: colors.brassTint,
    color: colors.textPrimary,
  },
});
