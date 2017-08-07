import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter/CounterReducer.js';

export default combineReducers({
  router: routerReducer,
  counter
})
