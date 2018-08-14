import React from 'react';
import styled from 'styled-components';

import HeaderNavBarCon from '../containers/HeaderNavBarCon';
import MainSearchCon from '../containers/MainSearchCon';
import MainComment from '../components/MainComment';
import MainCategory from '../components/MainCategory';
import MainSocial from '../components/MainSocial';
import Footer from '../components/Footer';

const PageContainer = styled.main`
  width: 100%;
  position: relative;
`;

const Main = ({history}) => {

  return (
    <PageContainer>
      <HeaderNavBarCon history={history} />
      <MainSearchCon history={history} />
      <MainComment />
      <MainCategory />
      <MainSocial />
      <Footer />
    </PageContainer>
  );
};

export default Main;
