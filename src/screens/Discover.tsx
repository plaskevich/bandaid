import MusicianCard, { Musician } from '~components/MusicianCard';
import { ScrollView, StyleSheet } from 'react-native';
import { db } from '~utils/firebase';
import { collection, query, getDocs } from 'firebase/firestore';
import { color } from 'theme';
import React, { useState, useEffect } from 'react';

const Discover = () => {
  const [musicians, setMusicians] = useState<Musician[]>([]);

  useEffect(() => {
    setMusicians([]);
    const getMusicians = async () => {
      try {
        const allMusicians = await getDocs(query(collection(db, 'musicians')));
        allMusicians.forEach((doc) => {
          const musician: Musician = {
            id: doc.id,
            name: doc.data().name,
            instruments: doc.data().instruments,
            genres: doc.data().genres,
            location: doc.data().location,
            image: doc.data().image,
          };
          setMusicians((prev) => [...prev, musician]);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getMusicians();
  }, []);

  return (
    <ScrollView style={style.container}>
      {musicians.map((musician) => (
        <MusicianCard key={musician.id} musician={musician} />
      ))}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    backgroundColor: color.white,
    borderTopWidth: 2,
    borderTopColor: color.black,
    flex: 1,
    columnGap: 12,
  },
});

export default Discover;
