import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

class SingleImagePreviewScreen extends Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>
          Content would be here.
        </Text>
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SingleImagePreviewScreen;
