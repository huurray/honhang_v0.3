import React from 'react';
import styled from 'styled-components';
import MakeUpCon from '../containers/MakeUpCon';
import HeaderNavBarCon from '../containers/HeaderNavBarCon';

const PageContainer = styled.main`
  width: 100%;
`;

const MakeUp = ({ history }) => {
  return (
    <PageContainer>
      <HeaderNavBarCon isBlack={true} history={history} />
      <MakeUpCon history={history} />
    </PageContainer>
  );
};

export default MakeUp;
