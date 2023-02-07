import { View, Text, Image } from 'react-native';
import React from 'react';
import InstrumentBadge from './InstrumentBadge';
import GenreBadge from './GenreBadge';
import GlyphNeue from '../icons/neue/GlyphNeue';

type Musician = {
  id: string;
  name: string;
  instruments: string[];
  genres: string[];
  location: string;
};

type MusicianCardProps = {
  musician: Musician;
};

const MusicianCard = ({ musician }: MusicianCardProps) => {
  return (
    <View className='mb-3 py-2 px-2 rounded-2xl flex flex-row space-x-4 border-2'>
      <View className='flex-col items-center space-y-2 pt-1'>
        <Image
          source={require('./img/u1.jpg')}
          className='w-16 h-16 rounded-full border-[1px] border-[#131316]'
        />
        <View className='flex-row items-center justify-center space-x-0.5 w-20'>
          <GlyphNeue name='neue-location' size={12} color='#131316' />
          <Text
            style={{ fontFamily: 'Rubik_500Medium' }}
            className='text-[#131316] text-xs'
          >
            {musician.location}
          </Text>
        </View>
      </View>

      <View className='flex space-y-2'>
        <View className='flex flex-row items-baseline space-x-2'>
          <Text
            style={{ fontFamily: 'Rubik_600SemiBold' }}
            className='text-[#131316] text-xl font-semibold'
          >
            {musician.name}
          </Text>
        </View>
        <View className='flex-row'>
          {musician.instruments.map((instrument) => (
            <InstrumentBadge instrument={instrument} key={instrument} />
          ))}
        </View>
        <View className='flex-row flex-wrap w-64'>
          {musician.genres.map((genre) => (
            <GenreBadge genre={genre} key={genre} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default MusicianCard;
