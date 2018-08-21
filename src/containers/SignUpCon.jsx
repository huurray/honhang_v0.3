import React, { Component } from 'react';
import firebase from 'firebase';
import SignUpCard from '../components/SignUpCard';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as statusActions from '../modules/status';
import * as userActions from '../modules/user';

class SignUpCon extends Component {
  state = {
    email: '',
    password: '',
    loadingState: false,
    modalState: false,
    errorMessage: ''
  };
  //여러개 인풋 핸들러
  onHandleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onPushBasicInfo = () => {
    const db = firebase.firestore();
    const docRef = db.collection('users');

    const { statusActions, userActions, history } = this.props;
    firebase.auth().onAuthStateChanged(function(user) {
      docRef
        .add({
          uid: user.uid
        })
        .then(function() {
          //유저정보 가져오기
          statusActions.isLogin();
          userActions.getUser();

          history.replace('/');
        });
    });
  };

  onInsert = () => {
    const { email, password } = this.state;
    const onComponent = this;

    this.setState({ loadingState: true });

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(user) {
        onComponent.onPushBasicInfo();
      })
      .catch(function(error) {
        let errorMessage = error.message;
        console.log(errorMessage);

        switch (errorMessage) {
          case 'The email address is badly formatted.':
            errorMessage = '이메일주소가 올바르지 않습니다.';
            break;
          case 'The password must be 6 characters long or more.':
            errorMessage = '비밀번호는 6자리 이상 입력해주세요.';
            break;
          case 'Password should be at least 6 characters':
            errorMessage = '비밀번호는 6자리 이상 입력해주세요.';
            break;
          case 'The email address is already in use by another account.':
            errorMessage = '이미 가입된 이메일 아이디에요.';
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
        <SignUpCard
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
)(SignUpCon);
