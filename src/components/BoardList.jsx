import React, { Component } from 'react';
import styled from 'styled-components';
import arrowRight from '../common/img/arrow-right.png';

const BoardBox = styled.div`
  float: left;
  width: 45%;
  height: 100%;
  position: relative;
  max-height: 100%;
  overflow: auto;
`;
const List = styled.ul`
  width: 100%;
  height: 100%;
`;
const Total = styled.p`
  ${props => props.theme.font.para_tiny};
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
  state = {
    on: false,
    moreList: 1
  };

  allListshow = () => {
    const { dataList, onSelect } = this.props;
    const { on, moreList } = this.state;

    return dataList.data.map((list, i) => {
      let number = '';
      if (i < 9) {
        number = `0${i + 1}`;
      } else {
        number = `${i + 1}`;
      }

      const showList = () => {
        if (i < moreList * 20) {
          return (
            <ListItem key={i} onClick={() => onSelect(i)} on={on}>
              <ListTitle on={on} white>
                <ListNum white>
                  {number}
                  &nbsp;&nbsp;-&nbsp;
                </ListNum>
                {list.title}
              </ListTitle>
            </ListItem>
          );
        }
      }

      return showList();
    });
  };

  componentDidMount() {
    const { moreList } = this.state;
    //infinite scroll list
    const showMore = () => this.setState({ moreList: moreList + 1 });
    this.boardBox.addEventListener('scroll', function() {
      if (this.scrollTop + this.clientHeight >= this.scrollHeight) {
        showMore();
      }
    });
  }

  render() {
    const { dataList } = this.props;

    return (
      <BoardBox innerRef={ref => (this.boardBox = ref)}>
        <List>
          <Total>TOTAL {dataList.data.length}</Total>
          {this.allListshow()}
        </List>
      </BoardBox>
    );
  }
}

export default BoardList;
