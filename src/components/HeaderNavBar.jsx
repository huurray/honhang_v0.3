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
  z-index: 999;
  box-shadow: ${props => props.on && '0 0.7rem 1.2rem rgba(0,0,0, 0.05)'};
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
const NavListLast = styled.div`
  ${props => props.theme.font.sub_header};
  color: ${props => props.on && '#000'};
  display: inline;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -2.2rem;
    width: 1px;
    height: 1rem;
    background-color: ${props => (props.on ? '#000' : '#fff')};
  }
`;
const NavListProfile = styled.div`
  ${props => props.theme.font.sub_header};
  color: ${props => props.on && '#000'};
  margin-left: 1.5rem;
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
  width: 12rem;
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
  width: 12rem;
  height: 11rem;
  background-color: ${props => props.theme.colors.WHITE};
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.colors.GREY_LIGHT_3};
  opacity: ${props => (props.on ? '1' : '0')};
  border-radius: 0.5rem;
`;
const ProfileText = styled.div`
  ${props => props.theme.font.para_forth};
  text-align: center;
  padding: 0.5rem;
  color: ${props => props.theme.colors.GREY_DARK_4};
  &:hover {
    background-color: ${props => props.theme.colors.GREY_LIGHT_2};
  }
  &:first-child {
    margin-top: 0.4rem;
  }
  &:last-child {
    border-top: 1px solid ${props => props.theme.colors.GREY_LIGHT_2};
  }
  &:not(:last-child) {
    margin-bottom: 0.3rem;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  position: relative;
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

const StyledNotLink = styled.div`
  float: left;
  cursor: pointer;
  margin-right: 3rem;
`;

const ProfileLink = styled(Link)`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: ${props => props.theme.colors.GREY_DARK_4};
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
  loginStatus,
  toggleLogin,
  hasUserData,
  getListAll,
  toggleMyPage
}) => {
  return (
    <Section on={onScrollDown}>
      <NavBarLeft>
        <StyledLink to="/">
          <LogoImg src={require(`../common/img/${logoImg}.png`)} />
        </StyledLink>
      </NavBarLeft>
      <NavBarRight>
        <StyledLink to="/local">
          <NavList white on={onScrollDown}>
            로컬 멘토
          </NavList>
        </StyledLink>
        <StyledLink to="/boardall">
          <NavListLast white on={onScrollDown} onClick={getListAll}>
            동행 리스트
          </NavListLast>
        </StyledLink>
        <StyledNotLink onClick={hasUserData}>
          <NavListToMake primary on={onScrollDown}>
            동행 모집
          </NavListToMake>
        </StyledNotLink>
        <NavListProfile white>
          <ProfileBox onClick={onClickProfile}>
            <ProfileImg src={require(`../common/img/${iconUser}.png`)} />
            <ProfileImg src={require(`../common/img/${downArrow}.png`)} />
            <ProfileContent on={isProfileOn}>
              <ProfileText onClick={toggleMyPage}>마이페이지</ProfileText>
              <ProfileText>
                <ProfileLink to="/qna">자주묻는질문</ProfileLink>
              </ProfileText>
              <ProfileText onClick={toggleLogin}>{loginStatus}</ProfileText>
            </ProfileContent>
          </ProfileBox>
        </NavListProfile>
      </NavBarRight>
    </Section>
  );
};

export default HeaderNavBar;
