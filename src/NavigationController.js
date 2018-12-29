import { Navigation } from 'react-native-navigation';
import { loadedIconsMap } from './lib/AppIcons';
import Colors from './styles/colors';


export const setInitialLayout = () => {
  const defaultOptions =
    {
      statusBar: {
        style: 'light',
      },
      layout: {
        backgroundColor: Colors.secondBlue,
        orientation: ['portrait', 'landscape'],
      },
      topBar: {
        buttonColor: 'white',
        background: {
          color: Colors.primaryBlue,
        },
      },
      bottomTabs: {
        elevation: 8, // BottomTabs elevation in dp
        titleDisplayMode: 'alwaysShow',
        backgroundColor: Colors.primaryBlue,
      },
    };

  Navigation.setDefaultOptions(defaultOptions);

  const tabOne = {
    stack: {
      children: [
        {
          component: {
            name: 'imago.GalleryScreen',
          },
        },
      ],
      options: {
        bottomTab: {
          text: 'Gallery',
          icon: loadedIconsMap.trending,
        },
      },
    },
  };

  const tabTwo = {
    stack: {
      children: [
        {
          component: {
            name: 'imago.UserScreen',
          },
        },
      ],
      options: {
        bottomTab: {
          text: 'User',
          icon: loadedIconsMap.user,
        },
      },
    },
  };

  const bottomTabs = {
    children: [
      tabOne,
      tabTwo,
    ],
    options: {},
  };

  Navigation.setRoot({
    root: {
      bottomTabs,
    },
  });
};

