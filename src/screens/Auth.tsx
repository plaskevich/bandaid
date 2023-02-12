import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import StartContent from '~components/auth/StartContent';
import LoginContent from '~components/auth/LoginContent';
import { color, font } from '../theme';

const Start = () => {
  const [content, setContent] = useState('start');
  return (
    <View style={content === 'start' ? style.bgBlue : style.bgGreen}>
      <View style={style.mainCard}>
        <View style={style.closeBtnContainer}>
          <Pressable>
            <Text style={style.closeBtn}>+</Text>
          </Pressable>
        </View>
        {content === 'start' && <StartContent setContent={setContent} />}
        {content === 'login' && <LoginContent />}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  bgBlue: {
    backgroundColor: color.blue,
  },
  bgGreen: {
    backgroundColor: color.green,
  },
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
  closeBtnContainer: {
    padding: 16,
    alignItems: 'flex-end',
    width: '100%',
  },
  closeBtn: {
    fontFamily: font.semiBold,
    transform: [{ rotate: '45deg' }],
    fontSize: 30,
  },
});

export default Start;
