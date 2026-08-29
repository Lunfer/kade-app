import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { colors, radii, shadow } from '../theme';

// Stepped-gable silhouette (echoes Amsterdam trapgevel houses), drawn as a
// flat-topped strip that sits directly on top of the card body with no gap
// and no clipping -- both pieces share one fill color, so the seam
// disappears and the whole thing reads as one gabled card.
const GABLE_PATH =
  'M0,40 L0,26 L14,26 L14,16 L28,16 L28,8 L50,0 L72,8 L72,16 L86,16 L86,26 L100,26 L100,40 Z';

interface GabledCardProps {
  children?: React.ReactNode;
  accentColor?: string;
  backgroundColor?: string;
  gableHeight?: number;
  style?: StyleProp<ViewStyle>;
  bodyStyle?: StyleProp<ViewStyle>;
}

export function GabledCard({
  children,
  accentColor = colors.brick,
  backgroundColor = colors.surface,
  gableHeight = 26,
  style,
  bodyStyle,
}: GabledCardProps) {
  return (
    <View style={[styles.container, shadow.card, style]}>
      <Svg width="100%" height={gableHeight} viewBox="0 0 100 40" preserveAspectRatio="none">
        <Path d={GABLE_PATH} fill={accentColor} />
      </Svg>
      <View style={[styles.body, { backgroundColor }, bodyStyle]}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: radii.md,
    overflow: 'hidden',
  },
  body: {
    borderBottomLeftRadius: radii.md,
    borderBottomRightRadius: radii.md,
    padding: 16,
  },
});
