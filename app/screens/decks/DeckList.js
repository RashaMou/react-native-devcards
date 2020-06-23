import React, { useState } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import FloatingActionButton from '../../components/FloatingActionButton';
import { connect } from 'react-redux';
import AddDeckModal from './AddDeckModal';

const DeckList = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View>
      <FlatList
        data={props.decks}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Cards', { deckId: item.id })
            }
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => `id-${item.id}`}
      />
      <AddDeckModal toggleModal={toggleModal} isModalVisible={isModalVisible} />
      <FloatingActionButton
        toggleModal={toggleModal}
        isModalVisible={isModalVisible}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  decks: state.decks.decks,
});

export default connect(mapStateToProps, {})(DeckList);
