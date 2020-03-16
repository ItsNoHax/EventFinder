import { Navigation } from 'react-native-navigation';
import store, { persist } from './src/store/store';
import { loadIcons } from './src/lib/AppIcons';
import { registerScreens } from './src/screens/screens';
import { setInitialLayout } from './src/NavigationController';
import Flags from './src/Flags';

async function onAppRegisterLaunch() {
  if (Flags.INITIAL_LAUNCH) {
    registerScreens(store);
    await Promise.all([loadIcons(), persist(store)]);
    Flags.INITIAL_LAUNCH = false;
  }

  setInitialLayout();
}

/**
 * The initial listener of our app,
 * this will get triggered on app start or when
 * the Android activity is recreated.
 * (For example by pressing back button on the
 * root screen)
 */
Navigation.events().registerAppLaunchedListener(() => { onAppRegisterLaunch(); });

