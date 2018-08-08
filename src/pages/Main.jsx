import React, { Component } from 'react';
import styled from 'styled-components';

const Test = styled.div`
  color: ${props => props.theme.colors.PRIMARY};
  ${props => props.theme.mixins.absoluteCenter};
`;

class Main extends Component {
  render() {
    return <Test>혼행시작합니다.</Test>;
  }
}

export default Main;
