import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts as useFraunces,
  Fraunces_600SemiBold,
  Fraunces_700Bold,
  Fraunces_500Medium_Italic,
} from '@expo-google-fonts/fraunces';
import {
  useFonts as useInter,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { RootNavigator } from './src/navigation/RootNavigator';
import { getDb } from './src/data/db';
import { seedContentIfNeeded } from './src/content';
import { colors, textStyles } from './src/theme';

export default function App() {
  const [frauncesLoaded] = useFraunces({ Fraunces_600SemiBold, Fraunces_700Bold, Fraunces_500Medium_Italic });
  const [interLoaded] = useInter({ Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold });
  const [dbReady, setDbReady] = useState(false);
  const [dbError, setDbError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        await getDb();
        await seedContentIfNeeded();
        setDbReady(true);
      } catch (err) {
        setDbError((err as Error).message);
      }
    })();
  }, []);

  if (dbError) {
    return (
      <View style={styles.center}>
        <Text style={[textStyles.body, { color: colors.error }]}>Failed to start: {dbError}</Text>
      </View>
    );
  }

  if (!frauncesLoaded || !interLoaded || !dbReady) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={colors.brick} size="large" />
      </View>
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <RootNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background, padding: 24 },
});
