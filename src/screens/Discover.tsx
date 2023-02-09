import React, { useEffect, useState } from 'react';
import MusicianCard from 'components/MusicianCard';
import { ScrollView } from 'react-native';
import { db } from '../../firebase';
import { collection, query, getDocs } from 'firebase/firestore';

const Discover = () => {
  const [musicians, setMusicians] = useState<any[]>([]);

  useEffect(() => {
    setMusicians([]);
    const getMusicians = async () => {
      try {
        const allMusicians = await getDocs(query(collection(db, 'musicians')));
        allMusicians.forEach((doc) => {
          const musicianData = doc.data();
          musicianData.id = doc.id;
          setMusicians((prev) => [...prev, musicianData]);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getMusicians();
  }, []);

  return (
    <ScrollView className='px-3 py-3 bg-[#F6F6F4] border-t-2 border-[#131316]'>
      {musicians.map((musician) => (
        <MusicianCard key={musician.id} musician={musician} />
      ))}
    </ScrollView>
  );
};

export default Discover;
