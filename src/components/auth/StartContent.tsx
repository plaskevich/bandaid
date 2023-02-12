import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { color, font } from 'theme';

type StartContentProps = {
  setContent: (content: string) => void;
};

const StartContent = ({ setContent }: StartContentProps) => {
  //   const handleSetContent = (content: string) => {
  //     setContent(content);
  //   };
  return (
    <View>
      <View>
        <Image
          source={require('../../assets/img/skategirl.gif')}
          style={style.gif}
        />

        <Text style={style.title}>{"Let's get it started"}</Text>
      </View>

      <View style={style.btnsContainer}>
        <Pressable style={style.loginBtn} onPress={() => setContent('login')}>
          <Text style={style.loginBtnText}>{'LOGIN'}</Text>
        </Pressable>
        <Pressable style={style.signUpBtn}>
          <Text style={style.signUpBtnText}>{'SIGN UP'}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  gif: {
    transform: [{ scale: 0.6 }],
    bottom: 100,
  },
  title: {
    fontFamily: font.extraBold,
    color: color.black,
    fontSize: 30,
    textAlign: 'center',
    bottom: 180,
  },
  btnsContainer: {
    alignItems: 'center',
    height: 120,
    justifyContent: 'space-between',
    bottom: 120,
  },
  loginBtn: {
    backgroundColor: color.black,
    width: 178,
    height: 56,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtnText: {
    color: color.white,
    fontSize: 32,
    fontFamily: font.bold,
  },
  signUpBtn: {
    borderColor: color.black,
    borderWidth: 4,
    width: 178,
    height: 56,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpBtnText: {
    color: color.black,
    fontSize: 32,
    fontFamily: font.bold,
  },
});

export default StartContent;
