import React from 'react';
import { View, Text, StyleSheet, Modal, Pressable, ScrollView } from 'react-native';
import { colors, textStyles, spacing, radii, shadow, fontFamilies } from '../theme';
import { VerbConjugation } from '../content/a1/conjugations';

interface VerbConjugationCardProps {
  verb: VerbConjugation | null;
  visible: boolean;
  onClose: () => void;
}

/**
 * A fading overlay (RN Modal, animationType="fade") showing a verb's full
 * conjugation across the tenses this app teaches -- present, simple past,
 * present perfect -- Cooljugator-style. Rendered from VocabularyScreen when
 * a verb word is tapped.
 */
export function VerbConjugationCard({ verb, visible, onClose }: VerbConjugationCardProps) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable style={styles.backdrop} onPress={onClose} />
      {verb && (
        <View style={styles.centerWrap} pointerEvents="box-none">
          <View style={styles.card}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
              <View style={styles.header}>
                <View style={styles.headerText}>
                  <Text style={[textStyles.heading, styles.infinitive]}>{verb.infinitive}</Text>
                  <Text style={[textStyles.bodySmall, styles.english]}>{verb.english}</Text>
                </View>
                <Pressable onPress={onClose} hitSlop={12} style={styles.closeButton}>
                  <Text style={styles.closeText}>{'✕'}</Text>
                </Pressable>
              </View>

              <View style={styles.summaryRow}>
                <Text style={[textStyles.caption, styles.summaryText]}>
                  Auxiliary: {verb.auxiliary} · Past participle: {verb.pastParticiple}
                </Text>
              </View>

              {verb.stemNote && <Text style={[textStyles.caption, styles.stemNote]}>{verb.stemNote}</Text>}

              {verb.tenses.map((tense) => (
                <View key={tense.label} style={styles.tenseBlock}>
                  <Text style={[textStyles.subheading, styles.tenseLabel]}>{tense.label}</Text>
                  {tense.note && <Text style={[textStyles.caption, styles.tenseNote]}>{tense.note}</Text>}
                  {tense.forms.map((f) => (
                    <View key={f.pronoun} style={styles.formRow}>
                      <Text style={[textStyles.bodySmall, styles.pronoun]}>{f.pronoun}</Text>
                      <Text style={[textStyles.body, styles.form]}>{f.form}</Text>
                    </View>
                  ))}
                </View>
              ))}

              {verb.usageNote && <Text style={[textStyles.caption, styles.usageNote]}>{verb.usageNote}</Text>}
            </ScrollView>
          </View>
        </View>
      )}
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
    maxHeight: '85%',
    backgroundColor: colors.surfaceRaised,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    ...shadow.card,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  headerText: { flex: 1, paddingRight: spacing.md },
  infinitive: { color: colors.brick },
  english: { color: colors.textFaded, marginTop: 2, fontStyle: 'italic' },
  closeButton: {
    width: 28,
    height: 28,
    borderRadius: radii.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  closeText: { color: colors.textSecondary, fontSize: 14 },
  summaryRow: {
    backgroundColor: colors.tealTint,
    borderRadius: radii.sm,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    marginBottom: spacing.sm,
  },
  summaryText: { color: colors.tealDark },
  stemNote: { color: colors.textFaded, marginBottom: spacing.lg },
  tenseBlock: { marginBottom: spacing.lg },
  tenseLabel: { color: colors.teal, marginBottom: spacing.xs },
  tenseNote: { color: colors.textFaded, marginBottom: spacing.xs },
  formRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  pronoun: { color: colors.textSecondary },
  form: { color: colors.textPrimary, fontFamily: fontFamilies.bodySemiBold },
  usageNote: { color: colors.textSecondary, marginTop: spacing.xs },
});
