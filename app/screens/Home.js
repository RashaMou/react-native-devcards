import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AddDeckModal from './decks/AddDeckModal';
import MyDecks from './decks/MyDecks';

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
      <AddDeckModal toggleModal={toggleModal} isModalVisible={isModalVisible} />
      <MyDecks />
    </View>
  );
};

export default Home;
