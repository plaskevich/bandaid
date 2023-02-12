import { View, Text, StyleSheet } from 'react-native';
import Music from '~assets/icons/music/Music';
import { color, instrumentColor } from 'theme';
import React from 'react';

export type Instrument = 'guitar' | 'voice' | 'drums' | 'bass' | 'piano';

const InstrumentBadge = ({ instrument }: { instrument: Instrument }) => {
  return (
    <View
      style={[
        style.badge,
        {
          backgroundColor:
            instrumentColor[instrument as keyof typeof instrumentColor],
        },
      ]}
    >
      <Music
        name={instrument}
        size={13}
        color={color.black}
        style={{ marginRight: 4 }}
      />
      <Text style={style.badgeText}>{instrument}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  badge: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: color.black,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginRight: 4,
    marginBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontFamily: 'Rubik_500Medium',
    fontSize: 13,
    color: color.black,
    textTransform: 'capitalize',
  },
});
export default InstrumentBadge;
