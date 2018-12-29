import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import commonStyles from '../styles/common';

class UserScreen extends Component {

  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {};
    Navigation.events().bindComponent(this);
  }

  componentDidAppear() {
    // need this later
  }

  render() {
    return (
      <SafeAreaView style={commonStyles.flexContainer} />
    );
  }

}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);
