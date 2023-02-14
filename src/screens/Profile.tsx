import { ScrollView, Text, Pressable } from 'react-native';
import React from 'react';
import { signOut } from '~utils/auth';

const Profile = () => {
  return (
    <ScrollView>
      <Pressable onPress={signOut}>
        <Text>Logout</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Profile;
