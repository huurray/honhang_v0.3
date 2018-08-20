import React, { Component } from 'react';
import Loading from '../common/Loading';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as statusActions from '../modules/status';
import * as userActions from '../modules/user';

export default function withGetData(WrappedComponent) {
  class getDataHOC extends Component {
    initializePage = () => {
      const { loginStatus, loading, statusLoading } = this.props;

      if (statusLoading) {
        return <Loading />;
      } else if(loginStatus === '로그아웃') {
        if (loading) {
          return <Loading />;
        } else {
          return <WrappedComponent {...this.props} />;
        }
      } else {
        return <WrappedComponent {...this.props} />;
      } 
    };

    render() {
      return <div>{this.initializePage()}</div>;
    }
  }

  const mapStateToProps = state => ({
    loginStatus: state.status.get('loginStatus'),
    loading: state.user.toJS().loading,
    statusLoading: state.status.toJS().loading
  });
  const mapDispatchToProps = dispatch => ({
    statusActions: bindActionCreators(statusActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(getDataHOC);
}
