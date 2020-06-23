import React, { useState } from 'react';
import { TextInput, View, Button, StyleSheet, Modal } from 'react-native';
import { addDeck } from './decksSlice';
import { connect } from 'react-redux';

const AddDeckModal = (props) => {
  const [deckName, setDeckName] = useState('');

  const handleSubmit = (text) => {
    console.log('text', text);
    props.addDeck(text);
    props.toggleModal();
    setDeckName('');
  };

  return (
    <View style={styles.modalContainer}>
      <Modal
        visible={props.isModalVisible}
        animationType='slide'
        transparent={true}
        style={styles.modal}
      >
        <View style={styles.background}>
          <View style={styles.modal}>
            <TextInput
              placeholder='Enter Deck Name'
              placeholderTextColor='rgba(0,0,0,0.2)'
              autoFocus={true}
              style={styles.input}
              onChangeText={(text) => setDeckName(text)}
              value={deckName}
            />
            <Button onPress={() => handleSubmit(deckName)} title='Ok' />
            <Button onPress={() => props.toggleModal()} title='Cancel' />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
  },
  background: {
    flex: 1,
    height: 200,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    marginBottom: 300,
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
  },
  input: {
    borderWidth: 3,
    padding: 10,
    borderRadius: 5,
    borderColor: 'rgba(0,0,0,0.2)',
  },
});

export default connect(null, { addDeck })(AddDeckModal);
