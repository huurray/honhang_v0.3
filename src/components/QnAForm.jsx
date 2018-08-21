import React, { Component } from 'react';
import styled from 'styled-components';
import downArrow from '../common/img/down-arrow-black.png';

const Section = styled.section`
  width: 60%;
  height: 50rem;
  margin: 0 auto;
  padding: 8rem 0;
`;

const QnaBox = styled.div`
  width: 100%;
`;
const MenuBox = styled.ul`
  width: 100%;
  height: 6rem;
`;
const Menu = styled.li`
  ${props => props.theme.font.para_tertiary};
  width: 20%;
  height: 100%;
  float: left;
  list-style: none;
  border-bottom: ${props =>
    props.on ? 'none !important' : '2px solid #333 !important'};
  border: ${props => (props.on ? '2px solid #333' : '1px solid #ccc')};
  text-align: center;
  padding-top: 1.8rem;
  cursor: pointer;
`;
const ListBox = styled.ul`
  width: 100%;
  display: ${props => (props.on ? 'block' : 'none')};
  overflow: hidden;
`;
const List = styled.li`
  width: 100%;
  list-style: none;
  position: relative;
`;
const Title = styled.div`
  ${props => props.theme.font.para_tertiary};
  display: block;
  width: 100%;
  height: 8rem;
  padding: 3rem;
  border-bottom: 1px solid ${props => props.theme.colors.GREY_LIGHT_3};
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    top: 3rem;
    right: 2rem;
    width: 2rem;
    height: 2rem;
    background: url(${downArrow}) no-repeat;
    background-size: cover;
  }
`;
const Contnent = styled.div`
  ${props => props.theme.font.para_forth};
  width: 100%;
  height: 20rem;
  display: ${props => (props.on ? 'block' : 'none')};
  transition: all 0.5s;
  padding: 3rem;
  background-color: ${props => props.theme.colors.GREY_LIGHT_1};
`;

class QnAForm extends Component {
  constructor(props) {
    super(props);

    this.getAllMenu = () => {
      const { onClickMenu, menuIndex, num } = this.props;

      return num.map((menu, i) => (
        <Menu key={i} on={menuIndex === i} onClick={() => onClickMenu(i)}>
          질문카테고리
          {i + 1}
        </Menu>
      ));
    };

    this.getAllList = () => {
      const { onClickList, menuIndex, contentIndex, num } = this.props;
      return num.map((list, i) => (
        <ListBox key={i} on={menuIndex === i}>
          <List>
            <Title onClick={() => onClickList(i)}>
              궁금하신 사항을 모집중입니다.
              {i + 1}
            </Title>
            <Contnent on={contentIndex === i}>
              성실히 답변하겠습니다.
              {i + 1}
            </Contnent>
          </List>
        </ListBox>
      ));
    };
  }

  render() {
    return (
      <Section>
        <QnaBox>
          <MenuBox>{this.getAllMenu()}</MenuBox>
          {this.getAllList()}
        </QnaBox>
      </Section>
    );
  }
}

export default QnAForm;
