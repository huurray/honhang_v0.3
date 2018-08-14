import React, { Component } from 'react';
import PasswordCard from '../components/PasswordCard';

class PasswordCon extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <PasswordCard history={history} />
      </div>
    );
  }
}

export default PasswordCon;
