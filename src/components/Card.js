import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import FastImage from 'react-native-fast-image';

const Card = ({ item, onPress }) => {
  const { width } = Dimensions.get('screen');
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.cardContainer}
    >
      <View>
        <View style={styles.imageContainer}>
          <FastImage
            resizeMode={FastImage.resizeMode.contain}
            style={{ height: 200, width: width - 20, backgroundColor: 'transparent' }}
            source={{ uri: item.urls && item.urls.regular ? item.urls.regular : 'https://Facebook.github.io/react-native/docs/assets/favicon.png' }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text>{item.description}</Text>
          <Text>{item.likes}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

Card.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    elevation: 3,
  },
  imageContainer: {
    flex: 7,
  },
  textContainer: {
    flex: 3,
  },
});

export default Card;
