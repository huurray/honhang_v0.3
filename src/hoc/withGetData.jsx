import React, { Component } from 'react';
import Loading from '../common/Loading';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from '../modules/user';

export default function withGetData(WrappedComponent) {
  class getDataHOC extends Component {

    render() {
      return (
        <div>
          {this.props.loading ? (
            <Loading />
          ) : (
            <WrappedComponent {...this.props} />
          )}
        </div>
      );
    }
  }

  const mapStateToProps = state => ({
    loading: state.user.toJS().loading
  });
  const mapDispatchToProps = dispatch => ({
    userActions: bindActionCreators(userActions, dispatch)
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(getDataHOC);
}
