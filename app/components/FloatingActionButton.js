import React from 'react';
import { View, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

const FloatingActionButton = (props) => {
  return (
    <View
      style={{
        backgroundColor: '#f3f3f3',
        flex: 1,
      }}
    >
      <ActionButton buttonColor='rgba(231,76,60,1)' offsetY={650}>
        <ActionButton.Item
          buttonColor='#3498db'
          title='New Card'
          onPress={() => {
            props.toggleModal('card');
          }}
        >
          <Icon name='md-create' style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor='#1abc9c'
          title='New Deck'
          onPress={() => {
            props.toggleModal('deck');
          }}
        >
          <Icon name='md-create' style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

const mapStateToProps = (state) => ({
  decks: state.decks.decks,
});

export default FloatingActionButton;
