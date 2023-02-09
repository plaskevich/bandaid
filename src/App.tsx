import React from 'react';
import 'nativewind/types.d';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Discover from './screens/Discover';
import Match from 'screens/Match';
import Chats from 'screens/Chats';
import Profile from 'screens/Profile';
import GlyphNeue from './assets/icons/neue/GlyphNeue';
import { StatusBar } from 'react-native';
import {
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
  Rubik_800ExtraBold,
  Rubik_900Black,
} from '@expo-google-fonts/rubik';
import Start from 'screens/Start';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const startPage = false;

export default function App() {
  const [fontsLoaded] = useFonts({
    Music: require('./assets/icons/music/Music.ttf'),
    GlyphNeue: require('./assets/icons/neue/GlyphNeue.ttf'),
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
    Rubik_800ExtraBold,
    Rubik_900Black,
  });

  if (!fontsLoaded) {
    return;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar barStyle='dark-content' />
          {startPage ? (
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name='Start' component={Start} />
            </Stack.Navigator>
          ) : (
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                  const getIconName = () => {
                    switch (route.name) {
                      case 'Discover':
                        return 'neue-adventures';
                      case 'Match':
                        return 'neue-sparkle';
                      case 'Chats':
                        return 'neue-messaging';
                      case 'Profile':
                        return 'neue-name';
                    }
                  };
                  const iconName = getIconName();
                  return <GlyphNeue name={iconName} size={28} color={color} />;
                },
                tabBarActiveTintColor: '#F6F6F4',
                tabBarInactiveTintColor: '#717279',
                tabBarStyle: {
                  backgroundColor: '#131316',
                  borderTopColor: '#131316',
                },
                tabBarLabelStyle: {
                  fontFamily: 'Rubik_500Medium',
                  fontSize: 10,
                },
                headerShown: !startPage,
                headerShadowVisible: false,
                headerTintColor: 'red',
                headerStyle: {
                  backgroundColor: '#F6F6F4',
                },
                headerTitleStyle: {
                  color: '#131316',
                  fontSize: 25,
                  fontFamily: 'Rubik_700Bold',
                },
              })}
            >
              <Tab.Screen name='Discover' component={Discover} />
              <Tab.Screen name='Match' component={Match} />
              <Tab.Screen name='Chats' component={Chats} />
              <Tab.Screen name='Profile' component={Profile} />
            </Tab.Navigator>
          )}
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
