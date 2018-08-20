import React from 'react';
import styled from 'styled-components';

//datepicker
import '../common/datepicker.css';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

import SideModal from '../common/SideModal';
import { SpecialButton } from '../styles/ui/buttons';

const SortBox = styled.div`
  float: left;
  width: 20%;
  height: 100%;
  text-align: left;
  position: relative;
`;
const SortMenu = styled.div`
  ${props => props.theme.font.english_primary};
  display: inline-block;
  border-bottom: ${props => props.on && `2px solid #fff`};
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;
const Searched = styled.div`
  ${props => props.theme.font.para_small};
  margin-top: 2rem;
`;
const Research = styled.div`
  position: absolute;
  bottom: ${props => (props.on ? '0' : '-23rem')};
  left: 0;
  width: 30rem;
  z-index: 99;
  transition: all 0.3s;
`;
const ShowUpBox = styled.div`
  margin: 2rem 0;
`;
const ShowUp = styled.div`
  ${props => props.theme.font.english_primary};
  width: 100%;
  letter-spacing: 0.1rem;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
  }
`;
const ShowUpImg = styled.img`
  float: left;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 0.3rem;
  margin-right: 1rem;
`;
const ResearchBar = styled.div`
  width: 100%;
  opacity: ${props => (props.on ? '1' : '0')};
`;
const Label = styled.label`
  ${props => props.theme.font.para_tiny};
  display: block;
  margin-bottom: 0.7rem;
`;
const Input = styled.input`
  ${props => props.theme.font.para_small};
  width: 21rem;
  height: 4.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  display: block;
  transition: all 0.3s;
  color: ${props => props.theme.colors.WHITE} !important;
  margin-bottom: 1rem;
  outline: none;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);

  &::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
`;
const ButtonBox = styled.div`
  padding-top: 2rem;
  margin-left: 0.3rem;
  opacity: ${props => (props.on ? '1' : '0')};
`;
const Profile = styled.div`
  position: absolute;
  top: 0;
  left: ${props=> props.on ? "0" : "-35rem"};
  transition: all 0.4s;
  width: 90%;
  height: 32rem;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${props => props.theme.colors.WHITE};
  text-align: left;
  padding: 1rem;  
`;
const ProfileImg = styled.div`
  width: 100%;
  height: 20rem;
  background-image: url(${props => props.url});
  background-size: cover;
  margin-bottom: 1rem;
`;
const ProfileRow = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
  padding-left: 0.5rem;
`;
const NameBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: left;
`;
const LocationBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: right;
`;
const Name = styled.div`
  ${props => props.theme.font.header_tertiary};
`;
const Age = styled.div`
  padding-top: 0.5rem;
  ${props => props.theme.font.para_small};
`;
const Location = styled.div`
  padding-top: 0.5rem;
  ${props => props.theme.font.para_small};
`;
const Icon = styled.img`
  width: 1.2rem;
  height: auto;
`;
const Content = styled.div`
  ${props => props.theme.font.para_tiny};
`;
const Bold = styled.h3`
  ${props => props.theme.font.para_tiny};
  font-weight: 500;
`;

const BoardSort = ({
  searchValue,
  isResearch,
  toggleResearch,
  onHandleChange,
  placeKeyword,
  onHandleKeyPress,
  onInsert,
  date,
  focused,
  onDateChange,
  onFocusChange,
  modalText,
  modalState,
  hideSideModal,
  kakaoInfo,
  profileModal
}) => {
  
  return (
    <SortBox>
      <SideModal
        text={modalText}
        modalState={modalState}
        hideSideModal={hideSideModal}
      />

      <Profile on={profileModal}>
        <ProfileImg url={kakaoInfo.kakaoBigImg} />
        <ProfileRow>
          <NameBox>
            <Name>
              {kakaoInfo.name}
              ,&nbsp;
            </Name>
            <Age>{kakaoInfo.age}</Age>
          </NameBox>
          <LocationBox>
            <Location>
              <Icon
                src={require('../common/img/icon-location.png')}
                alt="icon-loca"
              />
              {kakaoInfo.city}
            </Location>
          </LocationBox>
        </ProfileRow>
        <ProfileRow>
          <Bold>카카오톡Id :&nbsp;</Bold>
          <Content>{kakaoInfo.kakaoId}</Content>
        </ProfileRow>
        <ProfileRow>
          <Bold>이메일 :&nbsp;</Bold>
          <Content>{kakaoInfo.email}</Content>
        </ProfileRow>
      </Profile>

      <SortMenu white on>
        ALL
      </SortMenu>
      <SortMenu white>CUSTOM</SortMenu>
      {searchValue && (
        <Searched white>
          '{searchValue}
          '(으)로 검색한 결과입니다.
        </Searched>
      )}
      <Research on={isResearch}>
        <ShowUpBox onClick={toggleResearch}>
          <ShowUp white>
            <ShowUpImg
              src={require('../common/img/icon-search-white.png')}
              alt="icon-search-white"
            />
            RE-SEARCH
          </ShowUp>
        </ShowUpBox>
        <ResearchBar on={isResearch}>
          <Label white>여행지 *</Label>
          <Input
            type="text"
            onChange={onHandleChange}
            value={placeKeyword}
            onKeyPress={onHandleKeyPress}
            placeholder="에펠탑"
            autocomplete="off"
          />
        </ResearchBar>
        <ResearchBar on={isResearch}>
          <Label white>날짜</Label>
          <SingleDatePicker
            date={date}
            onDateChange={date => onDateChange(date)}
            focused={focused}
            onFocusChange={({ focused }) => onFocusChange(focused)}
            placeholder="19/07/2019"
            openDirection="up"
            id="research"
            required
            readOnly
          />
        </ResearchBar>
        <ButtonBox on={isResearch}>
          <SpecialButton onClick={onInsert}>검색하기</SpecialButton>
        </ButtonBox>
      </Research>
    </SortBox>
  );
};

export default BoardSort;
