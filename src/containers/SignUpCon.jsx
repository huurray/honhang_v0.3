import React, { Component } from 'react';
import SignUpCard from '../components/SignUpCard'

class SignUpCon extends Component {
  render() {
    const {history} = this.props;
    return (
      <div>
        <SignUpCard history={history}  />
      </div>
    );
  }
}

export default SignUpCon;