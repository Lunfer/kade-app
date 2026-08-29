import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';
import { colors, textStyles, spacing } from '../theme';

export type MasteryLevel = 'none' | 'low' | 'mid' | 'high' | 'done';

const MASTERY_COLOR: Record<MasteryLevel, string> = {
  none: colors.masteryNone,
  low: colors.masteryLow,
  mid: colors.masteryMid,
  high: colors.masteryHigh,
  done: colors.masteryDone,
};

export function accuracyToMastery(accuracy: number, attempts: number): MasteryLevel {
  if (attempts === 0) return 'none';
  if (accuracy >= 0.9) return 'done';
  if (accuracy >= 0.7) return 'high';
  if (accuracy >= 0.4) return 'mid';
  return 'low';
}

interface ProgressHouseProps {
  label: string;
  mastery: MasteryLevel;
  width?: number;
}

/** One narrow gabled house along the "street of houses" level map/progress view. */
export function ProgressHouse({ label, mastery, width = 64 }: ProgressHouseProps) {
  const fill = MASTERY_COLOR[mastery];
  return (
    <View style={[styles.container, { width }]}>
      <Svg width={width} height={width * 1.3} viewBox="0 0 60 78">
        <Path d="M6,78 L6,30 L30,6 L54,30 L54,78 Z" fill={fill} stroke={colors.textPrimary} strokeOpacity={0.12} strokeWidth={1} />
        <Rect x={24} y={54} width={12} height={24} fill={colors.surface} opacity={0.85} rx={2} />
        <Rect x={13} y={38} width={10} height={10} fill={colors.surface} opacity={0.7} rx={1.5} />
        <Rect x={37} y={38} width={10} height={10} fill={colors.surface} opacity={0.7} rx={1.5} />
      </Svg>
      <Text style={[textStyles.caption, styles.label]} numberOfLines={2}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  label: { color: colors.textSecondary, marginTop: spacing.xs, textAlign: 'center' },
});
