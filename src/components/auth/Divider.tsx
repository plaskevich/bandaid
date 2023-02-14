import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { color, font } from 'theme';

export default function Divider() {
  return (
    <View style={styles.divider}>
      <View style={styles.dividerLine} />
      <Text style={styles.dividerText}>OR</Text>
      <View style={styles.dividerLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 40,
    marginVertical: 40,
  },
  dividerLine: {
    flex: 1,
    height: 2,
    backgroundColor: color.black,
  },
  dividerText: {
    textAlign: 'center',
    fontFamily: font.bold,
    fontSize: 17,
    color: color.black,
    paddingHorizontal: 16,
  },
});
