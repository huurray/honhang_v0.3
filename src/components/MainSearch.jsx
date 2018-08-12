import React, { Component } from 'react';
import styled from 'styled-components';

import { Button } from '../styles/ui';

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
    const { onInsert, placeKeyword, onHandleChange } = this.props;

    return (
      <Section>
        <BgImgBox>{this.bgImgList()}</BgImgBox>
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
                placeholder="에펠탑"
                autocomplete="off"
              />
            </SearchElement>
            <SearchElement>
              <SearchLabel white>날짜</SearchLabel>
              <SearchInput type="text" placeholder="2020/07/19" readonly />
            </SearchElement>
            <SearchElement>
              <SearchLabel white>&nbsp;</SearchLabel>
              <Button onClick={onInsert}>검색하기</Button>
            </SearchElement>
          </Search>
        </MainSearchBox>
      </Section>
    );
  }
}

export default MainSearch;
