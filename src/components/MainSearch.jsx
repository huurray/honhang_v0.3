import React, { Component } from 'react';
import styled from 'styled-components';

//datepicker
import '../common/datepicker.css';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

import SideModal from '../common/SideModal';
import { SpecialButton } from '../styles/ui';

const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
`;
const BgImgBox = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
`;
const BgImg = styled.img`
  width: 100%;
  height: 100vh;
  animation: ${({ theme: { ani } }) => ani.zoomIn} 10s linear;
  animation-iteration-count: infinite;
  display: ${props => (props.on ? 'block' : 'none')};
`;
const MainSearchBox = styled.div`
  max-width: 45%;
  margin: 0 auto;
  padding-top: 30rem;
`;
const SearchText = styled.h1`
  width: 100%;
  margin: 13rem 0 7rem 0;
  padding-right: 5%;
  text-align: center;
  ${props => props.theme.font.header_secondary};
`;
const Search = styled.div`
  width: 100%;
`;
const SearchElement = styled.div`
  width: ${props => (props.half ? '55%' : '19%')}
  float: left;
  &:not(:last-child) {
    margin-right: 1%;
  }
`;
const SearchLabel = styled.label`
  margin: 0.5rem;
  display: block;
  ${props => props.theme.font.para_small};
`;
const SearchInput = styled.input`
  ${props => props.theme.font.para_tertiary};
  width: 100%;
  height: 5rem;
  padding: 1.5rem 2rem;
  border-radius: 1.5rem;
  background-color: ${props => props.theme.colors.WHITE};
  border: none;
  display: block;
  outline: none;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
  border-bottom: 2px solid transparent;
  &::-webkit-input-placeholder {
    color: ${props => props.theme.colors.GREY_DARK_1};
  }
  &:-ms-input-placeholder {
    color: ${props => props.theme.colors.GREY_DARK_1};
  }
`;

class MainSearch extends Component {
  //image slide
  bgImgList = () => {
    const { imgNum, imgArray } = this.props;
    return imgArray.map((_, i) => (
      <BgImg
        on={imgNum === i + 1}
        key={i}
        src={require(`../common/img/main_${i + 1}.jpg`)}
      />
    ));
  };

  render() {
    const {
      onInsert,
      placeKeyword,
      date,
      focused,
      onDateChange,
      onFocusChange,
      onHandleChange,
      onHandleKeyPress,
      modalText,
      modalState,
      hideSideModal
    } = this.props;

    return (
      <Section>
        <BgImgBox>{this.bgImgList()}</BgImgBox>
        <SideModal
          text={modalText}
          modalState={modalState}
          hideSideModal={hideSideModal}
        />
        <MainSearchBox>
          <SearchText white>
            외롭지않은 홀로 여행, 동행을 찾아보세요.
          </SearchText>
          <Search>
            <SearchElement half>
              <SearchLabel white>여행지 키워드 *</SearchLabel>
              <SearchInput
                type="text"
                onChange={onHandleChange}
                value={placeKeyword}
                onKeyPress={onHandleKeyPress}
                placeholder="에펠탑"
                autocomplete="off"
              />
            </SearchElement>
            <SearchElement>
              <SearchLabel white>날짜</SearchLabel>
              <SingleDatePicker
                date={date}
                onDateChange={date => onDateChange(date)}
                focused={focused}
                onFocusChange={({ focused }) => onFocusChange(focused)}
                placeholder="19/07/2019"
                id="main"
                required
                readOnly
              />
            </SearchElement>
            <SearchElement>
              <SearchLabel white>&nbsp;</SearchLabel>
              <SpecialButton full onClick={onInsert}>
                검색하기
              </SpecialButton>
            </SearchElement>
          </Search>
        </MainSearchBox>
      </Section>
    );
  }
}

export default MainSearch;
