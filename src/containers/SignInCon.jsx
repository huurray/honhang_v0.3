import React, { Component } from 'react';
import SignInCard from '../components/SignInCard'

class SignInCon extends Component {
  render() {
    const {history} = this.props;
    return (
      <div>
        <SignInCard history={history} />
      </div>
    );
  }
}

export default SignInCon;