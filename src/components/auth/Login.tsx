import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { font } from 'theme';
import Divider from '~components/auth/Divider';
import SignInWith from './SignInWith';
import BigButton from '~components/common/BigButton';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '~utils/firebase';

const LoginContent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ width: '100%', alignItems: 'center' }}>
      <Text style={style.title}>Bonjour 👋</Text>
      <View style={style.form}>
        <Text style={style.formLabel}>Email</Text>
        <TextInput
          textContentType='emailAddress'
          style={[style.formInput, { marginBottom: 16 }]}
          onChangeText={setEmail}
        />
        <Text style={style.formLabel}>Password</Text>
        <TextInput
          textContentType='password'
          secureTextEntry
          style={style.formInput}
          onChangeText={setPassword}
        />
      </View>
      <Divider />
      <SignInWith />
      <View style={style.loginButton}>
        <BigButton title='LOGIN' variant='filled' onPress={signIn} />
      </View>
    </View>
  );
};

const style = {
  title: {
    fontSize: 36,
    fontFamily: font.bold,
    marginTop: 40,
  },
  form: {
    width: 275,
    marginTop: 68,
  },
  formLabel: {
    fontSize: 17,
    fontFamily: font.bold,
    marginLeft: 18,
    marginBottom: 4,
  },
  formInput: {
    fontSize: 17,
    fontFamily: font.medium,
    borderWidth: 2,
    paddingVertical: 11,
    paddingHorizontal: 18,
    borderRadius: 100,
  },
  loginButton: {
    marginTop: 50,
  },
};

export default LoginContent;
