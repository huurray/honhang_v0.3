import React, { Component } from 'react';
import styled from 'styled-components';
import searchIconYellow from '../common/img/icon-search-yellow.png';

const Detail = styled.div`
  float: left;
  width: 35%;
  height: 100%;
`;
const DetailModal = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-left: 1rem;
  overflow: hidden;
`;
const DetailContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 1;
  width: 100%;
  height: 100%;
  display: block;
  padding: 4rem;
  background-color: rgba(255, 255, 255, 0.05);
`;
const DetailRow = styled.div`
  display: flex;
`;
const DetailH1 = styled.h1`
  ${props => props.theme.font.header_tertiary};
  color: ${props => props.theme.colors.WHITE} !important;
  padding-bottom: 0.5rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;
const DetailH3 = styled.h3`
  flex: 1;
  ${props => props.theme.font.para_primary};
  color: ${props => props.theme.colors.WHITE} !important;
  margin-top: 1rem;
`;
const DetailP = styled.p`
  ${props => props.theme.font.para_secondary};
  color: ${props => props.theme.colors.WHITE} !important;
  margin-top: 1rem;
`;
const DetailTitle = styled.p`
  ${props => props.theme.font.para_tiny};
  color: rgba(255, 255, 255, 0.7) !important;
`;
const DetailAbsol = styled.div`
  position: absolute;
  left: 4rem;
  bottom: 4rem;
`;
const KakaoId = styled.div`
  ${props => props.theme.font.para_primary};
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
class BoardDetail extends Component {
  render() {
    return (
      <Detail>
        <DetailModal>
          <DetailContent>
            <DetailH1>
              <DetailTitle>제목.</DetailTitle>
              오늘 에펠탑 구경가실분?
            </DetailH1>
            <DetailRow>
              <DetailH3>
                <DetailTitle>여행지.</DetailTitle>
                에펠탑
              </DetailH3>
              <DetailH3>
                <DetailTitle>도시.</DetailTitle>
                파리
              </DetailH3>
            </DetailRow>
            <DetailRow>
              <DetailH3>
                <DetailTitle>날짜.</DetailTitle>
                2018/06/14
              </DetailH3>
              <DetailH3>
                <DetailTitle>시간.</DetailTitle>
                10:00 AM
              </DetailH3>
            </DetailRow>
            <DetailH3>
              <DetailTitle>최대인원.</DetailTitle>
              4명
            </DetailH3>
            <DetailP>
              <DetailTitle>내용.</DetailTitle>
              안녕하세용.반갑습니당.
            </DetailP>
            <DetailAbsol>
              <DetailTitle>카카오톡ID.</DetailTitle>
              <KakaoId>gjwnsgur91</KakaoId>
            </DetailAbsol>
          </DetailContent>
        </DetailModal>
      </Detail>
    );
  }
}

export default BoardDetail;
