import { toJson } from 'unsplash-js';
import HTTPClient from '../lib/HTTPClient';

export const REQUEST_IMAGES = 'REQUEST_IMAGES';
function requestImages(page, orderBy) {
  return {
    type: REQUEST_IMAGES,
    payload: {
      page,
      orderBy,
    },
  };
}

export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';
function receiveImages(response, orderBy) {
  return {
    type: RECEIVE_IMAGES,
    payload: {
      orderBy,
      images: response,
      receivedAt: Date.now(),
    },
  };
}

export function fetchImages(page = 1, amount = 15, orderBy = 'latest') {
  return (dispatch) => {
    dispatch(requestImages(page, orderBy));
    return HTTPClient.photos.listPhotos(page, amount, orderBy)
      .then(toJson)
      .then(json => dispatch(receiveImages(json, orderBy)));
  };
}
