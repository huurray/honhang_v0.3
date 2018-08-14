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
const ProfileBox = styled.div`
  float: right;
  width: 10rem;
  height: 2.5rem;
  cursor: pointer;
`;
const ProfileImg = styled.img`
  width: 1.5rem;
  height: auto;
  margin-right: 1rem;
`;
const ProfileContent = styled.div`
  margin-top: 0.5rem;
  width: 10rem;
  height: 10rem;
  background-color: ${props => props.theme.colors.WHITE};
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.colors.GREY_LIGHT_3};
  opacity: ${props => props.on ? '1' : '0'};
`;
const ProfileText = styled.div`
  ${props => props.theme.font.para_secondary};
  text-align: center;
  margin: 0.5rem;
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

const HeaderNavBar = ({
  logoImg,
  iconUser,
  downArrow,
  onScrollDown,
  onClickProfile,
  isProfileOn,
  history,
  loginStatus
}) => {
  return (
    <Section on={onScrollDown}>
      <NavBarLeft>
        <StyledLink to="/">
          <LogoImg src={require(`../common/img/${logoImg}.png`)} />
        </StyledLink>
      </NavBarLeft>
      <NavBarRight>
        <StyledLink to="/">
          <NavList white on={onScrollDown}>
            로컬 멘토
          </NavList>
        </StyledLink>
        <StyledLink to="/boardall">
          <NavList white on={onScrollDown}>
            동행 리스트
          </NavList>
        </StyledLink>
        <StyledLink to="/makeup">
          <NavListToMake primary_light on={onScrollDown}>
            동행 모집
          </NavListToMake>
        </StyledLink>
        <NavList white>
          <ProfileBox onClick={onClickProfile}>
            <ProfileImg src={require(`../common/img/${iconUser}.png`)} />
            <ProfileImg src={require(`../common/img/${downArrow}.png`)} />
            <ProfileContent on={isProfileOn}>
              <ProfileText onClick={()=>{
                history.push('./signin')
              }}>{loginStatus}</ProfileText>
            </ProfileContent>
          </ProfileBox>
        </NavList>
      </NavBarRight>
    </Section>
  );
};

export default HeaderNavBar;
