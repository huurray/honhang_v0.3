import React from 'react';
import styled from 'styled-components';
import BoardCon from '../containers/BoardCon';
import HeaderNavBarCon from '../containers/HeaderNavBarCon';

const PageContainer = styled.div`
  overflow: hidden;
`;
const Section = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  padding: 12rem 0 8rem 0;
  overflow: hidden;
  position: relative;
`;
const BgImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
`;

const Board = ({history}) => {
  return (
    <PageContainer>
      <BgImage src={require('../common/img/board-back.jpg')} alt="board-back" />
      <Section>
        <HeaderNavBarCon history={history} />
        <BoardCon history={history} />
      </Section>
    </PageContainer>
  );
};

export default Board;
