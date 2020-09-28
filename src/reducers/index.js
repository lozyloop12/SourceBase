import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {
  homeReducers
} from '../modules';
import { loadingReducers } from './loading'

export default combineReducers({
  form: formReducer,
  ...homeReducers,
  ...loadingReducers,
});