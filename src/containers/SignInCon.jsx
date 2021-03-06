import React, { Component } from 'react';
import firebase from 'firebase';
import SignInCard from '../components/SignInCard';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as statusActions from '../modules/status';
import * as userActions from '../modules/user';

class SignInCon extends Component {
  state = {
    email: '',
    password: '',
    loadingState: false,
    modalState: false,
    errorMessage: ''
  };

  onHandleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onInsert = () => {
    const { email, password } = this.state;
    const { history } = this.props;
    const onComponent = this;
    this.setState({ loadingState: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(user) {
        if (user) {
          
          //유저정보 가져오기
          const { statusActions, userActions } = onComponent.props;
          statusActions.isLogin();
          userActions.getUser();
          
          history.replace('/');
        }
      })
      .catch(function(error) {
        let errorMessage = error.message;

        switch (errorMessage) {
          case 'The email address is badly formatted.':
            errorMessage = '이메일주소가 올바르지 않습니다.';
            break;
          case 'There is no user record corresponding to this identifier. The user may have been deleted.':
            errorMessage = '가입하신 이메일주소가 없습니다.';
            break;
          case 'The password is invalid or the user does not have a password.':
            errorMessage = '패스워드가 정확하지 않습니다.';
            break;
          default:
            return false;
        }

        onComponent.setState({
          loadingState: false,
          modalState: true,
          errorMessage
        });
      });
  };

  onHandleKeyPress = e => {
    if (e.key === 'Enter') {
      this.onInsert();
    }
  };

  hideSideModal = () => {
    this.setState({ modalState: false });
  };

  render() {
    const { loadingState, modalState, errorMessage } = this.state;
    const { history } = this.props;
    return (
      <div>
        <SignInCard
          history={history}
          onHandleChange={this.onHandleChange}
          onHandleKeyPress={this.onHandleKeyPress}
          onInsert={this.onInsert}
          loadingState={loadingState}
          modalState={modalState}
          errorMessage={errorMessage}
          hideSideModal={this.hideSideModal}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginStatus: state.status.get('loginStatus'),
  loading: state.user.toJS().loading
});
const mapDispatchToProps = dispatch => ({
  statusActions: bindActionCreators(statusActions, dispatch),
  userActions: bindActionCreators(userActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInCon);
