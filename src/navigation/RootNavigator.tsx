import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { colors } from '../theme';
import { HomeScreen } from '../screens/HomeScreen';
import { PracticeScreen } from '../screens/PracticeScreen';
import { GrammarListScreen } from '../screens/GrammarListScreen';
import { GrammarDetailScreen } from '../screens/GrammarDetailScreen';
import { ProgressScreen } from '../screens/ProgressScreen';
import { VocabularyScreen } from '../screens/VocabularyScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

export type GrammarStackParamList = {
  GrammarList: undefined;
  GrammarDetail: { topicId: string };
};

const Tab = createBottomTabNavigator();
const GrammarStack = createNativeStackNavigator<GrammarStackParamList>();

function GrammarStackNavigator() {
  return (
    <GrammarStack.Navigator screenOptions={{ headerShown: false }}>
      <GrammarStack.Screen name="GrammarList" component={GrammarListScreen} />
      <GrammarStack.Screen name="GrammarDetail" component={GrammarDetailScreen} />
    </GrammarStack.Navigator>
  );
}

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
    card: colors.surface,
    primary: colors.brick,
    text: colors.textPrimary,
    border: colors.border,
  },
};

const TAB_ICON: Record<string, string> = {
  Home: '⌂', // house-ish glyph, kept as text so no icon font dependency
  Practice: '✎',
  Grammar: '✍',
  Progress: '↑',
  Vocabulary: '⚪',
  Settings: '⚙',
};

export function RootNavigator() {
  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: colors.brick,
          tabBarInactiveTintColor: colors.textFaded,
          tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.border },
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>{TAB_ICON[route.name]}</Text>,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Practice" component={PracticeScreen} />
        <Tab.Screen name="Grammar" component={GrammarStackNavigator} options={{ title: 'Grammar' }} />
        <Tab.Screen name="Progress" component={ProgressScreen} />
        <Tab.Screen name="Vocabulary" component={VocabularyScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
