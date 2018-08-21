import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as statusActions from './modules/status';
import * as userActions from './modules/user';

class Root extends Component {
  componentWillMount() {
    //유저정보 가져오기
    const { statusActions, userActions } = this.props;
    statusActions.isLogin();
    userActions.getUser();
    
  }

  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  loginStatus: state.status.get('loginStatus'),
  userData: state.user.toJS().data
});
const mapDispatchToProps = dispatch => ({
  statusActions: bindActionCreators(statusActions, dispatch),
  userActions: bindActionCreators(userActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
