'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import LaunchScreen from '../components/launchScreen';
import * as loginActions from '../actions/loginActions';
import { connect } from 'react-redux';

class FitlicsApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <LaunchScreen
        loginStatus={state.isUserLoggedIn}
        {...actions} />
    );
  }
}

export default connect(state => ({
    state: state.authenticate
  }),
  (dispatch) => ({
    actions: bindActionCreators(loginActions, dispatch)
  })
)(FitlicsApp);
