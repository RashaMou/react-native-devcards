import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  Modal,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const Home = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => toggleModal()}>
        <Text>Add Deck</Text>
      </TouchableOpacity>

      <View style={styles.modalContainer}>
        <Modal
          visible={isModalVisible}
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
              />
              <Button onPress={() => toggleModal()} title='Ok' />
              <Button onPress={() => toggleModal()} title='Cancel' />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //   modalContainer: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     marginTop: 22,
  //   },
  //   modal: {
  //     margin: 20,
  //     backgroundColor: 'white',
  //     borderRadius: 20,
  //     padding: 35,
  //     alignItems: 'center',
  //     shadowColor: '#000',
  //     shadowOffset: {
  //       width: 0,
  //       height: 2,
  //     },
  //     shadowOpacity: 0.25,
  //     shadowRadius: 3.84,
  //     elevation: 5,
  //   },
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

export default Home;
