import React from 'react';
import { View, StyleSheet, ScrollView, StyleProp, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing } from '../theme';

interface ScreenContainerProps {
  children: React.ReactNode;
  scroll?: boolean;
  style?: StyleProp<ViewStyle>;
}

export function ScreenContainer({ children, scroll = true, style }: ScreenContainerProps) {
  const Wrapper = scroll ? ScrollView : View;
  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <Wrapper
        style={styles.flex}
        contentContainerStyle={scroll ? [styles.content, style] : undefined}
        {...(scroll ? {} : {})}
      >
        {scroll ? children : <View style={[styles.content, style, styles.flex]}>{children}</View>}
      </Wrapper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  flex: { flex: 1 },
  content: { padding: spacing.lg, paddingBottom: spacing.xxxl },
});
