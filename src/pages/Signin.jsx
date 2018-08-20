import React from 'react';
import styled from 'styled-components';
import SignInCon from '../containers/SignInCon';

const PageContainer = styled.div`
  width: 100%;
  position: relative;
`;

const SignIn = ({history}) => {
  return (
    <PageContainer>
      <SignInCon history={history} />
    </PageContainer>
  );
};

export default SignIn;
