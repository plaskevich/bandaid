import React from 'react';
import MusicianCard from 'components/MusicianCard';
import { ScrollView } from 'react-native';

const musicians = [
  {
    id: '1',
    name: 'Alex',
    instruments: ['guitar'],
    genres: ['rock', 'death metal', 'pop punk', 'cold wave'],
    location: 'Berlin',
  },
  {
    id: '2',
    name: 'John',
    instruments: ['bass', 'guitar'],
    genres: ['punk', 'rock'],
    location: 'London',
  },
  {
    id: '3',
    name: 'Kenan',
    instruments: ['drums', 'piano'],
    genres: ['hip-hop'],
    location: 'New-York',
  },
  {
    id: '4',
    name: 'Elisabeth',
    instruments: ['voice'],
    genres: ['jazz'],
    location: 'Berlin',
  },
  {
    id: '5',
    name: 'Sam',
    instruments: ['piano'],
    genres: ['classic'],
    location: 'Prague',
  },
];

const Discover = () => {
  return (
    <ScrollView className='px-3 py-3 bg-[#F6F6F4] border-t-2 border-[#131316]'>
      {musicians.map((musician) => (
        <MusicianCard key={musician.id} musician={musician} />
      ))}
    </ScrollView>
  );
};

export default Discover;
