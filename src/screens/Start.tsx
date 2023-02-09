import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';

const Start = () => {
  return (
    <View className='bg-[#88B0F7]'>
      <View className='bg-white top-24 border-4 rounded-t-[40] flex items-center'>
        <View className='p-4 flex w-full items-end'>
          <Pressable className='w-5'>
            <Text
              style={{
                fontFamily: 'Rubik_600SemiBold',
                transform: [{ rotateZ: '45deg' }],
              }}
              className='text-3xl text-center'
            >
              +
            </Text>
          </Pressable>
        </View>
        <View>
          <Image
            source={require('../assets/img/skategirl.gif')}
            className=' scale-[0.45] bottom-40'
          />

          <Text
            style={{ fontFamily: 'Rubik_800ExtraBold' }}
            className='text-[30px] text-center bottom-64'
          >
            {"Let's get it started"}
          </Text>
        </View>

        <View className='flex items-center space-y-2 bottom-64 py-20'>
          <Pressable className='bg-black w-[178px] h-[56px] rounded-full flex justify-center items-center'>
            <Text
              style={{ fontFamily: 'Rubik_700Bold' }}
              className='text-white text-[32px]'
            >
              {'LOGIN'}
            </Text>
          </Pressable>
          <Pressable className='w-[178px] h-[56px] border-4 rounded-full flex justify-center items-center'>
            <Text
              style={{ fontFamily: 'Rubik_700Bold' }}
              className='text-black text-[32px]'
            >
              {'SIGN UP'}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Start;
