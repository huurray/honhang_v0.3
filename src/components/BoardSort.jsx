import React, { Component } from 'react';
import styled from 'styled-components';

const SortBox = styled.div`
  float: left;
  width: 20%;
  height: 100%;
  text-align: left;
  position: relative;
`;
const SortMenu = styled.div`
  ${props => props.theme.font.english_primary};
  display: inline-block;
  border-bottom: ${props => props.on && `2px solid #fff`};
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

class BoardSort extends Component {
  render() {
    return (
      <SortBox>
        <SortMenu white on>ALL</SortMenu>
        <SortMenu white>CUSTOM</SortMenu>
      </SortBox>
    );
  }
}

export default BoardSort;
