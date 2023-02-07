import { View, Text } from 'react-native';
import React from 'react';
import Music from '../icons/music/Music';

const getBadgeColor = (instrument: string) => {
  switch (instrument) {
    case 'guitar':
      return '#88B0F7';
    case 'voice':
      return '#58C09C';
    case 'drums':
      return '#C19CF9';
    case 'bass':
      return '#FFE483';
    case 'piano':
      return '#FF8C8C';
    default:
      return '#F6F6F4';
  }
};

const getInstrumentIcon = (instrument: string) => {
  switch (instrument) {
    case 'guitar':
      return 'Music-guitar';
    case 'voice':
      return 'Music-voice-recorder';
    case 'drums':
      return 'Music-drum-set';
    case 'bass':
      return 'Music-guitar-strings';
    case 'piano':
      return 'Music-piano';
  }
};

const InstrumentBadge = ({ instrument }: { instrument: string }) => {
  const badgeColor = getBadgeColor(instrument);
  const instrumentIcon = getInstrumentIcon(instrument);
  return (
    <View
      style={{ backgroundColor: badgeColor }}
      className='py-1 px-3 rounded-2xl flex-row justify-center items-center mr-2 border border-[#131316]'
    >
      <Music name={instrumentIcon} size={15} color='#131316' className='mr-1' />
      <Text
        style={{ fontFamily: 'Rubik_500Medium' }}
        className='text-[#131316] text-[15px] capitalize'
      >
        {instrument}
      </Text>
    </View>
  );
};

export default InstrumentBadge;
