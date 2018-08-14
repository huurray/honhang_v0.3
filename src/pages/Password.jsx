import React from 'react';
import styled from 'styled-components';
import PasswordCon from '../containers/PasswordCon';

const PageContainer = styled.main`
  width: 100%;
  position: relative;
`;

const Password = ({history}) => {
  return (
    <PageContainer>
      <PasswordCon history={history} />
    </PageContainer>
  );
};

export default Password;
