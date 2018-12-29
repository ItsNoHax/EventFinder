import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchImages as fetchImagesAction } from '../actions/actions';
import { getAllImages } from '../selectors/imagesSelectors';
import commonStyles from '../styles/common';
import ImagesList from '../components/ImagesList';

class GalleryScreen extends Component {

  static propTypes = {
    fetchImages: PropTypes.func.isRequired,
    images: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};
    Navigation.events().bindComponent(this);
  }

  componentDidAppear() {
    const { fetchImages } = this.props;
    fetchImages();
  }

  render() {
    const { images } = this.props;
    return (
      <SafeAreaView style={commonStyles.flexContainer}>
        <ImagesList
          data={images}
        />
      </SafeAreaView>
    );
  }

}

const mapStateToProps = state => ({
  images: getAllImages(state),
});

const mapDispatchToProps = dispatch => ({
  fetchImages: location => dispatch(fetchImagesAction(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryScreen);
