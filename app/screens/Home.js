import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FloatingActionButton from '../components/FloatingActionButton';

import AddDeckModal from './decks/AddDeckModal';
import DeckList from './decks/DeckList';

const Home = (props) => {
  return (
    <View>
      <DeckList />
    </View>
  );
};

export default Home;
