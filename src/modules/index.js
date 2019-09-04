import { combineReducers } from 'redux';
import counter from './counter';
import date from './date'

const rootReducer = combineReducers({
  counter,
  date,
});

export default rootReducer