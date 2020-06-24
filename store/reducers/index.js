import { combineReducers } from 'redux';
import decksReducer from '../../app/screens/decks/decksSlice';
import authReducer from '../../app/Auth/authSlice';

const rootReducer = combineReducers({
  decks: decksReducer,
  auth: authReducer,
});

export default rootReducer;
