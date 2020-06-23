import React, { useState } from 'react';
import { TextInput, View, Button } from 'react-native';
import Modal from 'react-native-modal';

const AddDeck = (props) => {
  const handleModalClose = () => {
    props.setIsVisible(false);
  };

  return (
    <Modal isVisible={props.isVisible}>
      <View style={{ flex: 1 }}>
        <TextInput placeholder='Enter Deck Name' placeholderTextColor='black' />
        <Button onPress={handleModalClose} title='ok' />
      </View>
    </Modal>
  );
};

export default AddDeck;
