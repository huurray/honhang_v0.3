import React from 'react';
import styled from 'styled-components';

import HeaderNavBarCon from '../containers/HeaderNavBarCon';
import MyPageCon from '../containers/MyPageCon';

const PageContainer = styled.div`
  width: 100%;
`;

const MyPage = ({history}) => {
  return (
    <PageContainer>
      <HeaderNavBarCon isBlack={true} history={history} />
      <MyPageCon history={history} />
    </PageContainer>
  );
};

export default MyPage;
