import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';

const MyDecks = (props) => {
  useEffect(() => {
    console.log('DECKS', props.decks);
  }, []);

  return (
    <View>
      <Text>Dex</Text>
      <FlatList
        data={props.decks}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => `id-${item.id}`}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  decks: state.decks.decks,
});

export default connect(mapStateToProps, {})(MyDecks);
