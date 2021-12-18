import { combineReducers } from 'redux';
import authReducer from './authReducers';
import contactReducer from './contactReducers';
import errorReducer from './errorReducers';
export default combineReducers({
  auth: authReducer,
  contact: contactReducer,
  errors: errorReducer
});
