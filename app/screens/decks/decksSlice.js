import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:5000/api';

const decksSlice = createSlice({
  name: 'decks',
  initialState: {
    decks: [],
    loading: false,
    error: '',
  },
  reducers: {
    addDeckStart(state) {
      state.loading = true;
    },
    addDeckSuccess(state, action) {
      const newDeck = {
        id: Date.now(),
        name: action.payload.name,
        user_id: action.payload.user_id,
      };
      state.decks.push(newDeck);
      state.loading = false;
    },
    addDeckError(state, action) {
      (state.loading = false), (state.error = action.payload);
    },
  },
});

export const {
  addDeckStart,
  addDeckSuccess,
  addDeckError,
} = decksSlice.actions;
export default decksSlice.reducer;

export const addNewDeck = (deckName) => async (dispatch) => {
  dispatch(addDeckStart());
  try {
    const res = await axios.post(`${url}/decks`, {
      user_id: 1,
      name: deckName,
    });
    if (res) {
      console.log('res.data', res.data);
      dispatch(addDeckSuccess(res.data));
    }
  } catch (error) {
    dispatch(addDeckError(error));
  }
};
