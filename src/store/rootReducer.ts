import { combineReducers } from 'redux';
import exampleSlice from './example/exampleSlice';

const rootReducer = combineReducers({
  exampleSlice,
});

export default rootReducer;
