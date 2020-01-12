import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/reducers';

const loggerMiddleware = createLogger();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  return createStore(
    persistedReducer,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
}
