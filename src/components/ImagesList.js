import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import Card from './Card';

class ImagesList extends Component {

  static propTypes = {
    data: PropTypes.instanceOf(Array).isRequired,
    onPressCard: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { };
  }

  keyExtractor = item => item.id;

  renderItem = ({ item }) => {
    const { onPressCard } = this.props;
    return (
      <Card
        item={item}
        onPress={() => onPressCard(item)}
      />
    );
  }

  render() {
    const { data } = this.props;
    return (
      <FlatList
        data={data}
        extraData={this.state}
        // onEndReachedThreshold
        // onRefresh
        keyExtractor={this.keyExtractor}
        // ListHeaderComponent
        // ListFooterComponent
        // ListEmptyComponent
        renderItem={this.renderItem}
      />
    );
  }

}

export default ImagesList;
