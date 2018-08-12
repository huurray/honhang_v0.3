import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.section`
  width: 100%;
  height: 10rem;
  position: fixed;
  top: 0;
  left: 0;
  padding: 3rem 10%;
  z-index: 9;
  box-shadow: ${props => props.on && '0 1rem 1.5rem rgba(0,0,0, 0.1)'};
  background-color: ${props => props.on && '#fff'};
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
  color: ${props => props.on && '#000'};
  display: inline;
`;
const NavListToMake = styled.div`
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
const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 3rem;
  }
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const HeaderNavBar = ({ logoImg, iconUser, downArrow, onScrollDown }) => {
  return (
    <Section on={onScrollDown}>
      <NavBarLeft>
        <StyledLink to="/">
          <LogoImg src={require(`../common/img/${logoImg}.png`)} />
        </StyledLink>
      </NavBarLeft>
      <NavBarRight>
        <StyledLink to="/boardall">
          <NavList white on={onScrollDown}>
            로컬 멘토
          </NavList>
        </StyledLink>
        <StyledLink to="/boardall">
          <NavList white on={onScrollDown}>
            동행 리스트
          </NavList>
        </StyledLink>
        <StyledLink to="/boardall">
          <NavListToMake primary_light on={onScrollDown}>
            동행 만들기
          </NavListToMake>
        </StyledLink>
        <NavList white>
          <ProfileImg src={require(`../common/img/${iconUser}.png`)} />
          <ProfileImg src={require(`../common/img/${downArrow}.png`)} />
        </NavList>
      </NavBarRight>
    </Section>
  );
};

export default HeaderNavBar;
