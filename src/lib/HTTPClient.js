import { UNSPLASH_ACCESS_KEY, UNSPLASH_SECRET_KEY } from 'react-native-dotenv'; // eslint-disable-line import/no-extraneous-dependencies
import Unsplash from 'unsplash-js/native';

const unsplash = new Unsplash({
  accessKey: `${UNSPLASH_ACCESS_KEY}`,
  secret: `${UNSPLASH_SECRET_KEY}`,
});

export default unsplash;

