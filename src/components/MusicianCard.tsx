import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import InstrumentBadge, { Instrument } from './InstrumentBadge';
import GenreBadge from './GenreBadge';
import GlyphNeue from '~assets/icons/neue/GlyphNeue';
import { color } from 'theme';

export type Musician = {
  id?: string;
  name: string;
  instruments: Instrument[];
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
    <View style={style.musicianCard}>
      <View style={style.leftContent}>
        {!musician.image && (
          <Image style={style.image} source={getRandomAvatar()} />
        )}
        <View style={style.locationContainer}>
          <GlyphNeue
            style={{ marginRight: 2 }}
            name='neue-location'
            size={11}
            color={color.black}
          />
          <Text style={style.locationText}>{musician.location}</Text>
        </View>
      </View>

      <View style={style.rightContent}>
        <Text style={style.name}>{musician.name}</Text>
        <View style={style.badgeContainer}>
          {musician.instruments.map((instrument: Instrument, index) => (
            <InstrumentBadge instrument={instrument} key={index} />
          ))}
        </View>
        <View style={style.badgeContainer}>
          {musician.genres.map((genre) => (
            <GenreBadge genre={genre} key={genre} />
          ))}
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  musicianCard: {
    marginTop: 12,
    padding: 8,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: color.black,
    flexDirection: 'row',
  },
  leftContent: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
    marginRight: 12,
    width: 80,
    height: 95,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 100,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
  },
  locationText: {
    fontFamily: 'Rubik_500Medium',
    fontSize: 11,
    color: color.black,
  },
  rightContent: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: 'Rubik_600SemiBold',
    fontSize: 21,
    color: color.black,
  },
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 260,
    marginTop: 6,
  },
});

export default MusicianCard;
