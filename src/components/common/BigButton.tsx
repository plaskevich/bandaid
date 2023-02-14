import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { color, font } from 'theme';

type BigButtonProps = {
  title: string;
  variant: 'filled' | 'outline';
  onPress?: () => void;
};

export default function BigButton({ title, variant, onPress }: BigButtonProps) {
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          styles.button[variant],
          pressed && styles.button[variant].pressed,
        ]}
        onPress={onPress}
      >
        <Text style={[styles.text, styles.text[variant]]}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 178,
    height: 56,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    filled: {
      backgroundColor: color.black,
      pressed: {
        backgroundColor: color.blue,
      },
    },
    outline: {
      borderColor: color.black,
      borderWidth: 4,
      pressed: {
        backgroundColor: color.purple,
      },
    },
  },
  text: {
    fontSize: 32,
    fontFamily: font.bold,
    filled: {
      color: color.white,
      pressed: {
        color: color.black,
      },
    },
    outline: {
      color: color.black,
      pressed: {
        color: color.black,
      },
    },
  },
});
