import React, { Component } from 'react';
import styled from 'styled-components';

import { SpecialButton } from '../styles/ui/buttons';
import arrowDown from '../common/img/down-arrow-black.png';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 10rem;
  background-color: ${props => props.theme.colors.GREY_LIGHT_1};
`;
const MyPage = styled.div`
  width: 125rem;
  height: 100%;
  margin: 0 auto;
`;
const Profile = styled.div`
  float: left;
  width: 40rem;
  margin-top: 3rem;
  margin-right: 3rem;
  height: 78rem;
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: ${props => props.theme.colors.WHITE};
`;
const History = styled.div`
  float: left;
  width: 82rem;
  margin-top: 3rem;
  height: 78rem;
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: ${props => props.theme.colors.WHITE};
`;
const ProfileImg = styled.div`
  width: 100%;
  height: 30rem;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin-bottom: 1rem;
  border-radius: 1rem;
`;

const ProfileRow = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
  padding-left: 0.5rem;
`;
const NameBox = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;
const LocationBox = styled.div`
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.GREY_LIGHT_2};
`;
const Name = styled.div`
  ${props => props.theme.font.header_secondarySmall};
`;
const Age = styled.div`
  padding-top: 0.5rem;
  ${props => props.theme.font.para_primary};
`;
const Location = styled.div`
  padding-top: 0.5rem;
  ${props => props.theme.font.para_primary};
`;
const Icon = styled.img`
  width: 1.2rem;
  height: auto;
  margin-right: 0.5rem;
`;
const ContentRow = styled.div`
  display: flex;
  margin: 1.5rem;
`;
const Bold = styled.div`
  ${props => props.theme.font.english_small};
`;
const Content = styled.div`
  ${props => props.theme.font.english_small};
  font-weight: 400 !important;
  color: ${props => props.theme.colors.GREY_DARK_2} !important;
`;
const ButtonBox = styled.div`
  margin-top: 5rem;
  text-align: center;
`;
const HistoryTitle = styled.div`
  ${props => props.theme.font.para_tiny};
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.GREY_LIGHT_2};
  padding-bottom: 1rem;
  margin-bottom: 3rem;
`;
const List = styled.div`
  width: 100%;
  height: 63rem;
  max-height: 63rem;
  overflow: auto;
  padding-left: 1.2rem;
  position: relative;
`;
const ListItem = styled.li`
  width: 100%;
  list-style: none;
  position: relative;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    rgba(0, 0, 0, 0.05) 50%
  );
  background-size: 230%;
  transition: all 0.5s;
  border-bottom: 1px solid ${props => props.theme.colors.GREY_LIGHT_2};
  &:hover,
  &:active {
    background-position: 100%;
  }
`;
const ListTitle = styled.div`
  display: block;
  width: 100%;
  height: 8rem;
  padding: 3rem;
  cursor: pointer;
  ${props => props.theme.font.header_tertiary};
  &::after {
    content: '';
    position: absolute;
    top: 3rem;
    right: 2rem;
    width: 2rem;
    height: 2rem;
    background: ${props => props.on && `url(${arrowDown})`};
    background-size: cover;
  }
`;
const ListNum = styled.p`
  display: inline-block;
  ${props => props.theme.font.para_tiny};
`;

class MyPageForm extends Component {
  listUpHistory = () => {
    const { myData } = this.props;
    return myData.map((list, i) => {
      let number = '';
      if (i < 9) {
        number = `0${i + 1}`;
      } else {
        number = `${i + 1}`;
      }
      return (
        <ListItem>
          <ListTitle on>
            <ListNum>
              {number}
              &nbsp;&nbsp;-&nbsp;
            </ListNum>
            {list.title}
          </ListTitle>
        </ListItem>
      );
    });
  };

  render() {
    const { userData, logout } = this.props;

    return (
      <Container>
        <MyPage>
          <Profile>
            <HistoryTitle>Profile</HistoryTitle>
            {userData.kakaoBigImg === null ? (
              <ProfileImg url={require('../common/img/user-nobody.png')} />
            ) : (
              <ProfileImg url={userData.kakaoBigImg} />
            )}
            <ProfileRow>
              <NameBox>
                <Name>
                  {userData.name}
                  ,&nbsp;
                </Name>
                <Age>{userData.age}</Age>
              </NameBox>
            </ProfileRow>
            <LocationBox>
              <Location>
                <Icon
                  src={require('../common/img/icon-location.png')}
                  alt="icon-loca"
                />
                {userData.city}
              </Location>
            </LocationBox>
            <ContentRow>
              <Bold>Phone -&nbsp;</Bold>
              <Content>{userData.phone}</Content>
            </ContentRow>
            <ContentRow>
              <Bold>Email -&nbsp;</Bold>
              <Content>{userData.email}</Content>
            </ContentRow>
            <ContentRow>
              <Bold>KakaoID -&nbsp;</Bold>
              <Content>{userData.kakaoId}</Content>
            </ContentRow>
            <ButtonBox>
              <SpecialButton onClick={logout} >로그아웃</SpecialButton>
            </ButtonBox>
          </Profile>
          <History>
            <HistoryTitle>History</HistoryTitle>
            <List>
              {this.listUpHistory()}
            </List>
          </History>
        </MyPage>
      </Container>
    );
  }
}

export default MyPageForm;
