import React from 'react';
import styled from 'styled-components';
import { SpecialButton } from '../styles/ui/buttons';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding-top: 10rem;
`;
const NoInfo = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
const Text = styled.div`
  ${props => props.theme.font.header_primary};
  margin-bottom: 3rem;
`;

const NeedAuth = ({history}) => {
  return (
    <Container>
      <NoInfo>
        <Text>등록된 정보가 아직 없습니다!</Text>
        <SpecialButton
          onClick={()=>{
            history.push("/auth")
          }}
        >등록하기</SpecialButton>
      </NoInfo>
    </Container>
  );
};

export default NeedAuth;
