import React, { Component } from 'react';
import styled from 'styled-components';
import searchIconYellow from '../common/img/icon-search-yellow.png';

const Detail = styled.div`
  float: left;
  width: 35%;
  height: 100%;
  padding-left: 2rem;
`;
const DetailModal = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const DetailContent = styled.div`
  position: absolute;
  top: 0;
  right: ${props => (props.on ? '0' : '-60rem')};
  opacity: ${props => (props.on ? '1' : '0')};
  width: 98%;
  height: 100%;
  padding: 3rem;
  transition: all 0.5s;
  border: 1px solid rgba(255,255,255,0.7);
  border-radius: 0.5rem;
`;
const DetailRow = styled.div`
  display: flex;
`;
const DetailH1 = styled.h1`
  ${props => props.theme.font.header_tertiary};
  color: ${props => props.theme.colors.WHITE} !important;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;
const DetailH3 = styled.h3`
  flex: 1;
  ${props => props.theme.font.para_primary};
  color: ${props => props.theme.colors.WHITE} !important;
  margin-top: 1rem;
`;
const DetailP = styled.div`
  ${props => props.theme.font.para_secondary};
  color: ${props => props.theme.colors.WHITE} !important;
  margin-top: 1rem;
  max-height: 40%;
  overflow: auto;
`;
const DetailTitle = styled.p`
  ${props => props.theme.font.para_tiny};
  color: rgba(255, 255, 255, 0.7) !important;
`;
const DetailAbsol = styled.div`
  position: absolute;
  left: 3rem;
  bottom: 3rem;
`;
const KakaoId = styled.div`
  ${props => props.theme.font.para_forth};
  color: ${props => props.theme.colors.WHITE} !important;
  cursor: pointer;
  background-image: url(${searchIconYellow});
  background-repeat: no-repeat;
  background-size: contain;
  padding-left: 3rem;
  padding-right: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1.5px solid #ffeb00;
  display: inline;
  font-size: 1.7rem !important;
  font-family: 'Lato', serif;
`;
const SmallMent = styled.p`
  margin-top: 1.5rem;
  ${props => props.theme.font.para_tiny};
  color: rgba(255,255,255,0.6);
`;

class BoardDetail extends Component {
  allDetailShow = () => {
    const { dataList, selectIndex, onShowProfile } = this.props;

    return dataList.data.map((list, i) => {
      return (
        <DetailContent key={i} on={i === selectIndex}>
          <DetailH1>
            <DetailTitle>제목.</DetailTitle>
            {list.title}
          </DetailH1>
          <DetailRow>
            <DetailH3>
              <DetailTitle>여행지.</DetailTitle>
              {list.place}
            </DetailH3>
            <DetailH3>
              <DetailTitle>날짜.</DetailTitle>
              {list.date}
            </DetailH3>
          </DetailRow>
          <DetailRow>
            <DetailH3>
              <DetailTitle>최대인원.</DetailTitle>
              {list.howMany}
            </DetailH3>
          </DetailRow>
          <DetailP>
            <DetailTitle>내용.</DetailTitle>
            {/* 줄바꿈 표현 */}
            {list.content.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </DetailP>
          <DetailAbsol onClick={() => onShowProfile(list.kakao)}>
            <DetailTitle>카카오톡ID.</DetailTitle>
            <KakaoId>{list.kakao}</KakaoId>
            <SmallMent>클릭하면 좌측 상단에 프로필이 검색됩니다.</SmallMent>
          </DetailAbsol>
        </DetailContent>
      );
    });
  };
  
  render() {
    return (
      <Detail>
        <DetailModal>{this.allDetailShow()}</DetailModal>
      </Detail>
    );
  }
}

export default BoardDetail;
