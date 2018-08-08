import React, { Component } from 'react';
import styled from 'styled-components';

import HeaderNavBar from '../components/HeaderNavBar';
import MainSearchCon from '../containers/MainSearchCon';
import MainComment from '../components/MainComment';
import MainCategory from '../components/MainCategory';
import MainSocial from '../components/MainSocial';

const PageContainer = styled.main`
  width: 100%;
  position: relative;
`;

class Main extends Component {
  render() {
    return (
      <PageContainer>
        <HeaderNavBar />
        <MainSearchCon />
        <MainComment />
        <MainCategory />
        <MainSocial />
      </PageContainer>
    );
  }
}

export default Main;
