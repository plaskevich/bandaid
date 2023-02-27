import { View, Text, Image, StyleSheet } from 'react-native';
import BigButton from '~components/common/BigButton';
import React from 'react';
import { color, font } from 'theme';

type WelcomeProps = {
  setContent: (content: string) => void;
};

const Welcome = ({ setContent }: WelcomeProps) => {
  return (
    <View>
      <View>
        <Image
          source={require('../../assets/img/welcome.png')}
          style={styles.img}
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
  img: {
    transform: [{ scale: 0.32 }],
    bottom: 140,
  },
  title: {
    fontFamily: font.extraBold,
    color: color.black,
    fontSize: 32,
    textAlign: 'center',
    bottom: 270,
  },
  btnsContainer: {
    alignItems: 'center',
    height: 120,
    justifyContent: 'space-between',
    bottom: 130,
  },
});

export default Welcome;
