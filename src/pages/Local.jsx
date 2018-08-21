import React from 'react';
import styled from 'styled-components';
import HeaderNavBarCon from '../containers/HeaderNavBarCon';

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;
const NoInfo = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
const Text = styled.div`
  ${props => props.theme.font.header_secondarySmall};
  color: ${props=>props.theme.colors.GREY_DARK_1};
  margin-bottom: 3rem;
`;
const Local = ({ history }) => {
  return (
    <PageContainer>
      <HeaderNavBarCon isBlack={true} history={history} />
      <NoInfo>
        <Text>서비스 준비중입니다.</Text>
      </NoInfo>
    </PageContainer>
  );
};

export default Local;
