import React, { Component } from 'react';
import firebase from 'firebase';
import SignUpCard from '../components/SignUpCard';

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

  onInsert = () => {
    const { email, password } = this.state;
    const { history } = this.props;
    const onComponent = this;
    this.setState({ loadingState: true });

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(user) {
        if (user) {
          history.replace('/');
        }
      })
      .catch(function(error) {
        let errorMessage = error.message;

        switch (errorMessage) {
          case "The email address is badly formatted.":
          errorMessage = "이메일주소가 올바르지 않습니다.";
          break;
          case "The password must be 6 characters long or more.":
          errorMessage = "비밀번호는 6자리 이상 입력해주세요.";
          break;
          case "Password should be at least 6 characters":
          errorMessage = "비밀번호는 6자리 이상 입력해주세요.";
          break;
          default: return false;
        }
        
        onComponent.setState({
          loadingState: false,
          modalState: true,
          errorMessage
        });
      });
  };

  onHandleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.onInsert();
    }
  }

  hideSideModal = () => {
    this.setState({ modalState: false });
  }

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

export default SignUpCon;
