import { View, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import WelcomeScreen from '~components/auth/WelcomeScreen';
import Login from '~components/auth/Login';
import { color } from 'theme';
import Icon from '~assets/icons/main/Icon';

const Start = () => {
  const [content, setContent] = useState('start');
  return (
    <View style={style.bgBlue}>
      <View style={style.mainCard}>
        <View style={style.navBtnContainer}>
          <Pressable
            style={({ pressed }) => [
              style.navBtn,
              pressed && style.navBtn.pressed,
            ]}
            onPress={() => setContent('start')}
          >
            <Icon name='close' size={22} color={color.black} />
          </Pressable>
          {content != 'start' && (
            <Pressable
              style={({ pressed }) => [
                style.navBtn,
                pressed && style.navBtn.pressed,
              ]}
              onPress={() => setContent('start')}
            >
              <Icon name='back' size={22} color={color.black} />
            </Pressable>
          )}
        </View>
        {content === 'start' && <WelcomeScreen setContent={setContent} />}
        {content === 'login' && <Login />}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  bgBlue: {
    backgroundColor: color.blue,
  },
  // bgGreen: {
  //   backgroundColor: color.green,
  // },
  mainCard: {
    backgroundColor: color.white,
    top: 120,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderWidth: 4,
    borderBottomWidth: 0,
    alignItems: 'center',
    height: '100%',
  },
  navBtnContainer: {
    zIndex: 1,
    flexDirection: 'row-reverse',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingTop: 20,
    width: '100%',
  },
  navBtn: {
    padding: 10,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: color.white,
    pressed: {
      borderColor: color.black,
    },
  },
});

export default Start;
