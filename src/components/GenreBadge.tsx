import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { color } from 'theme';

const GenreBadge = ({ genre }: { genre: string }) => {
  return (
    <View style={style.badge}>
      <Text style={style.text}>#{genre}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  badge: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: color.black,
    paddingVertical: 2,
    paddingHorizontal: 4,
    marginRight: 4,
    marginBottom: 4,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Rubik_500Medium',
    fontSize: 11,
    color: color.black,
    textTransform: 'capitalize',
  },
});

export default GenreBadge;
