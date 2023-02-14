import { View, Text, Image, StyleSheet } from 'react-native';
import BigButton from '~components/common/BigButton';
import React from 'react';
import { color, font } from 'theme';

type WelcomeScreenProps = {
  setContent: (content: string) => void;
};

const WelcomeScreen = ({ setContent }: WelcomeScreenProps) => {
  return (
    <View>
      <View>
        <Image
          source={require('../../assets/img/skategirl.gif')}
          style={styles.gif}
        />

        <Text style={styles.title}>{"Let's get it started!"}</Text>
      </View>

      <View style={styles.btnsContainer}>
        <BigButton
          title='LOGIN'
          variant='filled'
          onPress={() => setContent('login')}
        />
        <BigButton
          title='SIGN UP'
          variant='outline'
          onPress={() => setContent('signup')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gif: {
    transform: [{ scale: 0.6 }],
    bottom: 120,
  },
  title: {
    fontFamily: font.extraBold,
    color: color.black,
    fontSize: 32,
    textAlign: 'center',
    bottom: 200,
  },
  btnsContainer: {
    alignItems: 'center',
    height: 120,
    justifyContent: 'space-between',
    bottom: 120,
  },
});

export default WelcomeScreen;
