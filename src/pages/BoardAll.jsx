import React from 'react';
import styled from 'styled-components';
import BoardAllCon from '../containers/BoardAllCon';
import HeaderNavBarCon from '../containers/HeaderNavBarCon';

const PageContainer = styled.main`
  overflow: hidden;
`;
const Section = styled.main`
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
  z-index: -1;;
`;

const BoardAll = () => {
  return (
    <PageContainer>
      <BgImage src={require('../common/img/board-back.jpg')} alt="board-back" />
      <Section>
        <HeaderNavBarCon />
        <BoardAllCon />
      </Section>
    </PageContainer>
  );
};

export default BoardAll;
