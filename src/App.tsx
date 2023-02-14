import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from '~screens/Auth';
import Discover from '~screens/Discover';
import Match from '~screens/Match';
import Chats from '~screens/Chats';
import Profile from '~screens/Profile';
import Icon from '~assets/icons/main/Icon';
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
import { color, font } from './theme';
import { useAuthentication } from '~utils/auth';
import { RootTabParamList, RootStackParamList } from '~utils/types';

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    Music: require('./assets/icons/music/Music.ttf'),
    Icon: require('./assets/icons/main/Icon.ttf'),
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
    Rubik_800ExtraBold,
    Rubik_900Black,
  });
  const { user } = useAuthentication();
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(false);

  useEffect(() => {
    if (user) {
      setShowWelcomeScreen(false);
    }
  }, [user]);

  if (!fontsLoaded) {
    return;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar barStyle='dark-content' />
          {showWelcomeScreen ? (
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name='Auth' component={Auth} />
            </Stack.Navigator>
          ) : (
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                  return (
                    <Icon
                      name={route.name.toLowerCase()}
                      size={28}
                      color={color}
                    />
                  );
                },
                tabBarActiveTintColor: color.white,
                tabBarInactiveTintColor: color.gray,
                tabBarStyle: {
                  backgroundColor: color.black,
                  borderTopColor: color.black,
                },
                tabBarLabelStyle: {
                  fontFamily: font.medium,
                  fontSize: 10,
                },
                headerShadowVisible: false,
                headerStyle: {
                  backgroundColor: color.white,
                },
                headerTitleStyle: {
                  color: color.black,
                  fontSize: 25,
                  fontFamily: font.bold,
                },
              })}
            >
              <Tab.Screen name='Discover' component={Discover} />
              <Tab.Screen
                name='Match'
                component={Match}
                listeners={() => ({
                  tabPress: (e) => {
                    if (!user) {
                      e.preventDefault();
                      setShowWelcomeScreen(true);
                    }
                  },
                })}
              />
              <Tab.Screen
                name='Chats'
                component={Chats}
                listeners={() => ({
                  tabPress: (e) => {
                    if (!user) {
                      e.preventDefault();
                      setShowWelcomeScreen(true);
                    }
                  },
                })}
              />
              <Tab.Screen
                name='Profile'
                component={Profile}
                listeners={() => ({
                  tabPress: (e) => {
                    if (!user) {
                      e.preventDefault();
                      setShowWelcomeScreen(true);
                    }
                  },
                })}
              />
            </Tab.Navigator>
          )}
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
