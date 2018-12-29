import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import GalleryScreen from './GalleryScreen';
import UserScreen from './UserScreen';

/* eslint-disable import/prefer-default-export */
export function registerScreens(store) {
  Navigation.registerComponentWithRedux('imago.GalleryScreen', () => GalleryScreen, Provider, store);
  Navigation.registerComponentWithRedux('imago.UserScreen', () => UserScreen, Provider, store);
}
