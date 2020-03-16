import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import FastImage from 'react-native-fast-image';

const Card = ({ item, onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    style={styles.cardContainer}
  >
    <View>
      <FastImage
        resizeMode={FastImage.resizeMode.stretch}
        style={[styles.imageStyle]}
        source={{ uri: item.urls && item.urls.regular ? item.urls.regular : 'https://Facebook.github.io/react-native/docs/assets/favicon.png' }}
      />
      <View style={styles.absoluteTextContainer}>
        <Text style={styles.descriptionText}>{item.description}</Text>
      </View>
    </View>
  </TouchableHighlight>
);

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
    borderRadius: 18,
    elevation: 8,
  },
  imageStyle: {
    height: 240,
    borderRadius: 18,
    backgroundColor: 'transparent',
  },
  absoluteTextContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 1.0)',
    bottom: 12,
    left: 12,
  },
  descriptionText: {
    color: 'white',
  },
});

export default Card;
