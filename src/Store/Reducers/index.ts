import {combineReducers} from 'redux';

import auth from './auth';
import controllApp from './controll-app';

export default combineReducers({
  auth,
  controllApp
});
