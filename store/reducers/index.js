import { combineReducers } from 'redux';
import decksReducer from '../../app/screens/decks/decksSlice';

const rootReducer = combineReducers({
  decks: decksReducer,
});

export default rootReducer;
