import { StyleSheet, View } from 'react-native';
import React from 'react';
import Icon from '~assets/icons/main/Icon';
import { color } from 'theme';

export default function SignInWith() {
  return (
    <View style={styles.container}>
      <View style={[styles.button, { backgroundColor: color.yellow }]}>
        <Icon name='google' size={30} color={color.black} />
      </View>
      <View style={[styles.button, { backgroundColor: color.blue }]}>
        <Icon name='facebook' size={30} color={color.black} />
      </View>
      <View style={[styles.button, { backgroundColor: color.red }]}>
        <Icon name='apple' size={30} color={color.black} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    borderWidth: 2,
    padding: 15,
    borderRadius: 100,
    marginHorizontal: 9,
  },
});
