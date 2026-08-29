import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Alert } from 'react-native';
import { colors, textStyles, spacing, radii } from '../theme';
import { ScreenContainer } from '../components/ScreenContainer';
import { Button } from '../components/Button';
import { progressRepo } from '../data/repositories/progress';
import { useUserProgress } from '../hooks/useUserProgress';
import { Level } from '../data/types';

const LEVELS: Level[] = ['A0', 'A1', 'A2', 'B1', 'B2'];

export function SettingsScreen() {
  const { progress, reload } = useUserProgress();
  const [busy, setBusy] = useState(false);

  const setOverride = async (level: Level | null) => {
    setBusy(true);
    await progressRepo.setLevelOverride(level);
    await reload();
    setBusy(false);
  };

  const confirmReset = () => {
    Alert.alert(
      'Reset all progress?',
      'This deletes every attempt and topic mastery score. Grammar content stays. This cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: async () => {
            setBusy(true);
            await progressRepo.resetProgress();
            await reload();
            setBusy(false);
          },
        },
      ]
    );
  };

  return (
    <ScreenContainer>
      <Text style={[textStyles.displayMedium, styles.title]}>Settings</Text>

      <Text style={[textStyles.subheading, styles.sectionLabel]}>Level override</Text>
      <Text style={[textStyles.bodySmall, styles.mutedText]}>
        Jump ahead or back. Leave unset to progress naturally as you master each level.
      </Text>
      <View style={styles.levelRow}>
        {LEVELS.map((l) => {
          const active = progress?.levelOverride === l;
          return (
            <Pressable
              key={l}
              disabled={busy}
              onPress={() => setOverride(active ? null : l)}
              style={[styles.levelChip, active && styles.levelChipActive]}
            >
              <Text style={active ? styles.levelTextActive : styles.levelText}>{l}</Text>
            </Pressable>
          );
        })}
      </View>

      <Text style={[textStyles.subheading, styles.sectionLabel, { marginTop: spacing.xxl }]}>Progress</Text>
      <Button title="Reset progress" variant="ghost" onPress={confirmReset} disabled={busy} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.brick, marginBottom: spacing.lg },
  sectionLabel: { color: colors.textPrimary, marginBottom: spacing.xs },
  mutedText: { color: colors.textSecondary, marginBottom: spacing.md },
  levelRow: { flexDirection: 'row', gap: spacing.sm, flexWrap: 'wrap' },
  levelChip: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: radii.pill,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  levelChipActive: { backgroundColor: colors.brick, borderColor: colors.brick },
  levelText: { color: colors.textSecondary },
  levelTextActive: { color: colors.textOnBrick },
});
