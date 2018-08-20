import React from 'react';
import styled from 'styled-components';
import HeaderNavBarCon from '../containers/HeaderNavBarCon';
import QnACon from '../containers/QnACon';

const PageContainer = styled.div`
  width: 100%;
`;

const QnA = ({ history }) => {
  return (
    <PageContainer>
      <HeaderNavBarCon isBlack={true} history={history} />
      <QnACon history={history} />
    </PageContainer>
  );
};

export default QnA;
