import { persistStore } from 'redux-persist';
import configureStore from './configureStore';


export default configureStore();

/**
* Persist the store
* @param {store} store - The Redux store to persist
* @returns {Promise} - Promise that resolves when the store is rehydrated
*/
export const persist = store => new Promise((resolve) => {
  persistStore(store, undefined, resolve);
});
