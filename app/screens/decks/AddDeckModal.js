import React, { useState } from 'react';
import {
  TextInput,
  Text,
  View,
  Button,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';
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
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 15,
              }}
            >
              New Deck
            </Text>
            <TextInput
              placeholder='Enter Deck Name'
              placeholderTextColor='rgba(0,0,0,0.2)'
              autoFocus={true}
              style={styles.input}
              onChangeText={(text) => setDeckName(text)}
              value={deckName}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 10,
                marginBottom: 20,
              }}
            >
              <TouchableOpacity onPress={() => props.toggleModal()}>
                <Text style={{ fontSize: 20, color: 'red' }}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleSubmit(deckName)}>
                <Text style={{ fontSize: 20 }}>Ok</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: 300,
    backgroundColor: 'rgb(242,242,247)',
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
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: 'rgba(0,0,0,0.2)',
    marginVertical: 10,
    marginHorizontal: 20,
  },
});

export default connect(null, { addDeck })(AddDeckModal);
