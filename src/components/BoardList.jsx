import React, { Component } from 'react';
import styled from 'styled-components';
import arrowRight from '../common/img/arrow-right.png';

const BoardBox = styled.div`
  float: left;
  width: 45%;
  position: relative;
  max-height: 100%;
  overflow: auto;
`;
const List = styled.ul`
  width: 100%;
  height: 100%;
`;
const Total = styled.p`
  color: rgba(255, 255, 255, 0.6) !important;
  margin-left: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;
const ListItem = styled.li`
  width: 100%;
  list-style: none;
  position: relative;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%
  );
  background-size: 230%;
  transition: all 0.5s;
  &:hover,
  &:active {
    background-position: 100%;
  }

  background-position: ${props => props.on && '100%'};
`;
const ListTitle = styled.div`
  display: block;
  width: 100%;
  height: 8rem;
  padding: 3rem;
  cursor: pointer;
  ${props => props.theme.font.header_tertiary};
  &::after {
    content: '';
    position: absolute;
    top: 3rem;
    right: 2rem;
    width: 2rem;
    height: 2rem;
    background: ${props => props.on && `url(${arrowRight})`};
    background-size: cover;
  }
`;
const ListNum = styled.p`
  display: inline-block;
  ${props => props.theme.font.para_tiny};
`;

class BoardList extends Component {
  render() {
    return (
      <BoardBox>
        <List>
          <Total>sdf</Total>
          <ListItem on>
            <ListTitle on white>
              <ListNum white>01&nbsp;&nbsp;-&nbsp;</ListNum>
              오늘 에펠탑 야경구경하실분?
            </ListTitle>
          </ListItem>
        </List>
      </BoardBox>
    );
  }
}

export default BoardList;
