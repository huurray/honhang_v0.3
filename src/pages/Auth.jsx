import React from 'react';
import styled from 'styled-components';
import AuthCon from '../containers/AuthCon';
import HeaderNavBarCon from '../containers/HeaderNavBarCon';

const PageContainer = styled.main`
  width: 100%;
`;

const Auth = ({ history }) => {
  return (
    <PageContainer>
      <HeaderNavBarCon isBlack={true} history={history} />
      <AuthCon />
    </PageContainer>
  );
};

export default Auth;