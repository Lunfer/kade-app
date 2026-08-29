import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle, StyleProp, ActivityIndicator } from 'react-native';
import { colors, radii, spacing, textStyles } from '../theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
}

export function Button({ title, onPress, variant = 'primary', disabled, loading, style }: ButtonProps) {
  const palette = {
    primary: { bg: colors.brick, bgPressed: colors.brickDark, text: colors.textOnBrick },
    secondary: { bg: colors.teal, bgPressed: colors.tealDark, text: colors.textOnTeal },
    ghost: { bg: 'transparent', bgPressed: colors.border, text: colors.brick },
  }[variant];

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.base,
        { backgroundColor: pressed ? palette.bgPressed : palette.bg },
        variant === 'ghost' && styles.ghostBorder,
        (disabled || loading) && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={palette.text} />
      ) : (
        <Text style={[textStyles.subheading, { color: palette.text }]}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ghostBorder: {
    borderWidth: 1.5,
    borderColor: colors.brick,
  },
  disabled: {
    opacity: 0.5,
  },
});
