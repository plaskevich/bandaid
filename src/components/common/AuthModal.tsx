import { View, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import { color } from 'theme';
import Modal from 'react-native-modal';
import Icon from '~assets/icons/main/Icon';
import Login from '~components/auth/Login';
import SignUp from '~components/auth/SignUp';
import Welcome from '~components/auth/Welcome';

type AuthModalProps = {
  showModal: boolean;
  closeModal: () => void;
};

const AuthModal = ({ showModal, closeModal }: AuthModalProps) => {
  const [content, setContent] = useState('welcome');

  return (
    <Modal
      style={styles.modal}
      isVisible={showModal}
      backdropOpacity={1}
      backdropColor={color.blue}
    >
      <View style={styles.navBtnContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.navBtn,
            pressed && styles.navBtn.pressed,
          ]}
          onPress={() => closeModal()}
        >
          <Icon name='close' size={22} color={color.black} />
        </Pressable>
        {content != 'welcome' && (
          <Pressable
            style={({ pressed }) => [
              styles.navBtn,
              pressed && styles.navBtn.pressed,
            ]}
            onPress={() => setContent('welcome')}
          >
            <Icon name='back' size={22} color={color.black} />
          </Pressable>
        )}
      </View>
      <View style={styles.content}>
        {content === 'welcome' && <Welcome setContent={setContent} />}
        {content === 'login' && <Login />}
        {content === 'signup' && <SignUp />}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    padding: 0,
    backgroundColor: color.white,
    top: 120,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderWidth: 4,
    borderBottomWidth: 0,
    alignItems: 'center',
    height: '100%',
  },
  navBtnContainer: {
    zIndex: 1,
    flexDirection: 'row-reverse',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    width: '100%',
  },
  navBtn: {
    padding: 10,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: color.white,
    pressed: {
      borderColor: color.black,
    },
  },
  content: {
    height: 760,
  },
});

export default AuthModal;
