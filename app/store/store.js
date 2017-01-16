import { createStore, combineReducers } from 'redux';
import appReducer from '../reducers/index';

var store  = createStore(appReducer);
export default store;