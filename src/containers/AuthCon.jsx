import React, { Component, Fragment } from 'react';
import AuthForm from '../components/AuthForm';
import PageNav from '../components/PageNav';

class AuthCon extends Component {
  render() {
    return (
      <Fragment>
        <PageNav 
          title="안전한 동행인 인증하기"
          location="신원 인증"
          progressText="AUTHENTICATION"
          progressTextSmall="본 인증은 최초 한번만 진행됩니다!"
          color="true"
          firstImg="icon-id-active"
          secondImg="icon-document"
        />
        <AuthForm/>
      </Fragment>
    );
  }
}

export default AuthCon;