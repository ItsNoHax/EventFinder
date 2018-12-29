import { combineReducers } from 'redux';
import union from 'lodash/union';
import { RECEIVE_IMAGES } from '../actions/actions';

function byId(state = {}, action) {
  switch (action.type) {

    case RECEIVE_IMAGES: {
      const currentImages = state;
      const { images } = action.payload;
      const payloadImages = {};
      images.forEach((img) => {
        payloadImages[img.id] = img;
      });
      return {
        ...currentImages,
        ...payloadImages,
      };
    }

    default:
      return state;

  }
}

function allIds(state = [], action) {
  switch (action.type) {

    case RECEIVE_IMAGES: {
      const currentImageIds = state;
      const { images } = action.payload;
      const payloadImageIds = [];
      images.forEach((img) => {
        payloadImageIds.push(img.id);
      });
      return union(currentImageIds, payloadImageIds);
    }

    default:
      return state;

  }
}


export default combineReducers({
  byId,
  allIds,
});
