import React, { Component } from 'react';
import styled from 'styled-components';

import HeaderNavBarCon from '../containers/HeaderNavBarCon';
import MainSearchCon from '../containers/MainSearchCon';
import MainComment from '../components/MainComment';
import MainCategoryCon from '../containers/MainCategoryCon';
import MainSocial from '../components/MainSocial';
import Footer from '../components/Footer';

const PageContainer = styled.div`
  width: 100%;
  position: relative;
`;

class Main extends Component {

  render() {
    const { history } = this.props;
    return (
      <PageContainer>
        <HeaderNavBarCon history={history} />
        <MainSearchCon history={history} />
        <MainComment />
        <MainCategoryCon />
        <MainSocial />
        <Footer />
      </PageContainer>
    );
  }
}

export default Main