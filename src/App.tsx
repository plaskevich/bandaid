import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import { RootTabParamList } from '~utils/types';
import AuthModal from '~components/common/AuthModal';

const Tab = createBottomTabNavigator<RootTabParamList>();

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
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (user) {
      setShowModal(false);
    }
  }, [user]);

  if (!fontsLoaded) {
    return;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar barStyle='dark-content' />
          <AuthModal
            showModal={showModal}
            closeModal={() => setShowModal(false)}
          />
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
                    setShowModal(true);
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
                    setShowModal(true);
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
                    setShowModal(true);
                  }
                },
              })}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
