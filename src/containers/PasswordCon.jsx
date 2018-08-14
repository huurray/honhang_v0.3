import React, { Component } from 'react';
import firebase from 'firebase';
import PasswordCard from '../components/PasswordCard';

class PasswordCon extends Component {
  state = {
    email: '',
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
    const { email } = this.state;
    const onComponent = this;
    this.setState({ loadingState: true });

    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function() {
        onComponent.setState({
          loadingState: false,
          modalState: true,
          errorMessage: '입력하신 이메일로 메일이 발송되었습니다!'
        });
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

  onHandleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.onInsert();
    }
  }

  hideSideModal = () => {
    this.setState({ modalState: false });
  };

  render() {
    const { loadingState, modalState, errorMessage } = this.state;
    const { history } = this.props;
    return (
      <div>
        <PasswordCard
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

export default PasswordCon;
