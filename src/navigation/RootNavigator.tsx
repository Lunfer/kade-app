import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { House, CaseLower, LoaderCircle, SquareText, Settings } from 'lucide-react-native';
import { colors } from '../theme';
import { HomeScreen } from '../screens/HomeScreen';
import { GrammarTopic } from '../data/types';
import { GrammarListScreen } from '../screens/GrammarListScreen';
import { GrammarDetailScreen } from '../screens/GrammarDetailScreen';
import { ProgressScreen } from '../screens/ProgressScreen';
import { VocabularyScreen } from '../screens/VocabularyScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

export type GrammarStackParamList = {
  GrammarList: undefined;
  // topics: the filtered/ordered list the user was browsing when they opened this topic,
  // used to swipe to the next/previous topic without a refetch. Undefined for deep links
  // that skip the list screen -- swipe navigation is simply unavailable there.
  GrammarDetail: { topicId: string; topics?: GrammarTopic[] };
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

const TAB_ICON: Record<string, typeof House> = {
  Home: House,
  Grammar: CaseLower,
  Progress: LoaderCircle,
  Vocabulary: SquareText,
  Settings: Settings,
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
          tabBarIcon: ({ color, size }) => {
            const Icon = TAB_ICON[route.name];
            return <Icon color={color} size={size} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Grammar" component={GrammarStackNavigator} options={{ title: 'Grammar' }} />
        <Tab.Screen name="Progress" component={ProgressScreen} />
        <Tab.Screen name="Vocabulary" component={VocabularyScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
