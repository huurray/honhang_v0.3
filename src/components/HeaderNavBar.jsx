import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  height: 10rem;
  position: fixed;
  top: 0;
  left: 0;
  padding: 3rem 20rem;
  z-index: 9;
`;
const NavBarLeft = styled.div`
  float: left;
`;
const NavBarRight = styled.div`
  float: right;
  padding-top: 1rem;
`;
const LogoImg = styled.img`
  width: 14rem;
  height: auto;
`;
const NavList = styled.div`
  ${props => props.theme.font.sub_header};
  display: inline;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 3rem;
  }
`;
const ProfileImg = styled.img`
  width: 1.5rem;
  height: auto;
  margin-right: 1rem;
`;

const HeaderNavBar = () => {
  return (
    <Section>
      <NavBarLeft>
        <LogoImg src={require('../common/img/logo-white.png')} />
      </NavBarLeft>
      <NavBarRight>
        <NavList white>로컬 멘토</NavList>
        <NavList white>동행 리스트</NavList>
        <NavList primary_light>동행 만들기</NavList>
        <NavList white>
          <ProfileImg src={require('../common/img/icon-user-white.png')} />
          <ProfileImg src={require('../common/img/down-arrow.png')} />
        </NavList>
      </NavBarRight>
    </Section>
  );
};

export default HeaderNavBar;
