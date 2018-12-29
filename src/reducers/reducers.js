import { combineReducers } from 'redux';
import images from './images';
import currentUser from './currentUser';

export default combineReducers({
  images,
  currentUser,
});
