import React, { Component } from 'react';
import styled from 'styled-components';

const Test = styled.div`
  color: ${({ theme: { colors }}) => colors.PRIMARY};
  ${({ theme: { mixins }}) => mixins.absoluteCenter};
  ${absoluteCenter};
`;

class Signin extends Component {
  render() {
    return (
      <div>
        <Test>혼행시작합니다.</Test>
      </div>
    );
  }
}

export default Signin;
