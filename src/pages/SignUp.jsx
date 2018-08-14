import React from 'react';
import styled from 'styled-components';
import SignUpCon from '../containers/SignUpCon';

const PageContainer = styled.main`
  width: 100%;
  position: relative;
`;

const SignUp = ({history}) => {
  return (
    <PageContainer>
      <SignUpCon history={history} />
    </PageContainer>
  );
};

export default SignUp;
