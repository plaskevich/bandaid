import { View, Text, Image } from 'react-native';
import React from 'react';
import InstrumentBadge from './InstrumentBadge';
import GenreBadge from './GenreBadge';
import GlyphNeue from '../assets/icons/neue/GlyphNeue';

export type Musician = {
  id?: string;
  name: string;
  instruments: string[];
  genres: string[];
  location: string;
  image?: string;
};

type MusicianCardProps = {
  musician: Musician;
};

const getRandomAvatar = () => {
  const avatars = [
    require('../assets/avatars/avatar-green.png'),
    require('../assets/avatars/avatar-blue.png'),
    require('../assets/avatars/avatar-purple.png'),
    require('../assets/avatars/avatar-red.png'),
    require('../assets/avatars/avatar-yellow.png'),
  ];
  return avatars[Math.floor(Math.random() * avatars.length)];
};

const MusicianCard = ({ musician }: MusicianCardProps) => {
  return (
    <View className='mb-3 py-2 px-2 rounded-2xl flex flex-row space-x-4 border-2'>
      <View className='flex-col items-center space-y-2 pt-1'>
        {!musician.image && (
          <Image
            source={getRandomAvatar()}
            className='w-16 h-16 rounded-full'
          />
        )}
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
        <View className='flex-row flex-wrap w-64'>
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
