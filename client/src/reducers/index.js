import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import appReducer from './appReducer';
import {userReducer} from './userReducer';

export default combineReducers({
  appState:appReducer,
  userState:userReducer,
  routing
})
