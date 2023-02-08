import React, { useEffect, useState } from 'react';
import MusicianCard from 'components/MusicianCard';
import { ScrollView } from 'react-native';
import { db } from '../../firebase';
import { collection, query, getDocs } from 'firebase/firestore';

const Discover = () => {
  const [musicians, setMusicians] = useState<any[]>([]);
  const getMusicians = async () => {
    const q = query(collection(db, 'musician'));
    const musicians = await getDocs(q);
    return musicians;
  };

  useEffect(() => {
    getMusicians();
    return () => {
      musicians.forEach((doc) => {
        console.log(doc.data());
        setMusicians((prev) => [...prev, doc.data()]);
      });
    };
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
