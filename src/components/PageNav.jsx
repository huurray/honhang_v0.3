import React from 'react';
import styled from 'styled-components';
import makeupBack from '../common/img/makeup_back.jpg';

const Section = styled.section`
  width: 100%;
`;
const SectionTitle = styled.section`
  width: 100%;
  height: 25rem;
  background-image: url(${makeupBack});
  background-size: cover;
  margin-top: 10rem;
  padding-top: 12rem;
  text-align: center;
`;
const Title = styled.div`
  ${props => props.theme.font.header_secondarySmall};
`;
const SectionLocation = styled.section`
  width: 100%;
  height: 6rem;
  border-bottom: 1px solid ${props => props.theme.colors.GREY_LIGHT_2};
`;
const Row = styled.div`
  margin: 0 auto;
  width: 60%;
  padding-top: 1.5rem;
`;
const CurrentLocation = styled.div`
  ${props => props.theme.font.para_tertiary};
  font-weight: 700 !important;
  float: left;
`;
const CurrentLocationIcon = styled.div`
  ${props => props.theme.font.para_tiny};
  font-weight: 700 !important;
  float: left;
  margin-top: 0.2rem;
`;
const SectionProgress = styled.section`
  width: 60%;
  margin: 0 auto;
  padding-top: 8rem;
`;
const ProgressText = styled.div`
  ${props => props.theme.font.english_big};
  text-align: center;
`;
const ProgressTextSmall = styled.div`
  ${props => props.theme.font.para_tertiary};
  font-weight: 700 !important;
  padding-top: 1rem;
  text-align: center;
  color: ${props => props.color && '#ff3f7d'};
`;
const ProgressBox = styled.div`
  padding-top: 5rem;
  text-align: center;
`;
const ProgressIcon = styled.div`
  display: inline-block;
  text-align: center;
  &:not(:last-child) {
    margin-right: 8rem;
  }
`;
const IconImg = styled.img`
  width: 10rem;
  height: 10rem;
  margin-bottom: 2rem;
`;

const PageNav = ({ title, location, progressText, progressTextSmall, color, firstImg, secondImg, shutProgress }) => {
  return (
    <Section>
      <SectionTitle>
        <Title white>{title}</Title>
      </SectionTitle>
      <SectionLocation>
        <Row>
          <CurrentLocation>홈</CurrentLocation>
          <CurrentLocationIcon>&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;</CurrentLocationIcon>
          <CurrentLocation>{location}</CurrentLocation>
        </Row>
      </SectionLocation>
      {!shutProgress && (
        <SectionProgress>
          <ProgressText>{progressText}</ProgressText>
          <ProgressTextSmall color={color}>{progressTextSmall}</ProgressTextSmall>
          <ProgressBox>
            <ProgressIcon>
              <IconImg src={require(`../common/img/${firstImg}.png`)} alt="iconId" />
              <ProgressTextSmall>신원 증명</ProgressTextSmall>
            </ProgressIcon>
            <ProgressIcon>
              <IconImg src={require(`../common/img/${secondImg}.png`)} alt="iconDocument" />
              <ProgressTextSmall>동행 정보 작성</ProgressTextSmall>
            </ProgressIcon>
            <ProgressIcon>
              <IconImg src={require('../common/img/icon-schedule.png')} alt="iconSchedule" />
              <ProgressTextSmall>커뮤니티 등록</ProgressTextSmall>
            </ProgressIcon>
          </ProgressBox>
        </SectionProgress>
      )}
    </Section>
  );
};

export default PageNav;
