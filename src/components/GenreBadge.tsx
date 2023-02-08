import { View, Text } from 'react-native';
import React from 'react';

const GenreBadge = ({ genre }: { genre: string }) => {
  return (
    <View className='border border-[#131316] py-0.5 px-1 rounded-md mr-1 flex-row mb-1'>
      <Text
        style={{ fontFamily: 'Rubik_500Medium' }}
        className='text-[#131316] text-[11px] capitalize '
      >
        #{genre}
      </Text>
    </View>
  );
};

export default GenreBadge;
