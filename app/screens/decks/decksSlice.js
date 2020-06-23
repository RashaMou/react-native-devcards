import { createSlice } from '@reduxjs/toolkit';

const decksSlice = createSlice({
  name: 'decks',
  initialState: {
    decks: [],
    loading: false,
    error: '',
  },
  reducers: {
    addDeck(state, action) {
      const newDeck = {
        id: Date.now(),
        name: action.payload,
      };
      state.decks.push(newDeck);
    },
  },
});

export const { addDeck } = decksSlice.actions;
export default decksSlice.reducer;

export const addNewDeck = (deckName) => {
  dispatch(addDeck(deckName));
};
