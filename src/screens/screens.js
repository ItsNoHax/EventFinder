import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import GalleryScreen from './GalleryScreen';
import UserScreen from './UserScreen';
import SingleImageViewScreen from './SingleImageViewScreen';

export function registerScreens(store) {
  Navigation.registerComponentWithRedux('imago.GalleryScreen', () => GalleryScreen, Provider, store);
  Navigation.registerComponentWithRedux('imago.UserScreen', () => UserScreen, Provider, store);
  Navigation.registerComponentWithRedux('imago.SingleImageViewScreen', () => SingleImageViewScreen, Provider, store);
}
