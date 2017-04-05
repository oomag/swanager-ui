import { combineReducers } from 'redux';
import apps from './apps';
import auth from './auth';
import signup from './signup';
import services from './services';
import notifications from './notifications';


export default combineReducers({
  auth, signup, apps, services, notifications,
});
