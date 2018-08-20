import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  height: 70rem;
  padding-top: 5rem;
  background-color: ${props => props.theme.colors.GREY_LIGHT_1};
`;
const TitleBox = styled.div`
  text-align: center;
  padding-bottom: 3rem;
`;
const SubTitle = styled.div`
  ${props => props.theme.font.english_primary};
`;
const Title = styled.div`
  ${props => props.theme.font.header_tertiary};
`;
const Category = styled.div`
  width: 112rem;
  height: 50rem;
  margin: 0 auto;
`;
const Row = styled.div`
  float: left;
  &:not(:last-child) {
    margin-right: 2rem;
  }
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
`;
const Card = styled.div`
  float: left;
  width: 36rem;
  height: 100%;
  cursor: pointer;
`;
const Img = styled.img`
  width: 100%;
  height: 50rem;
`;
const CardTitle = styled.div`
  ${props => props.theme.font.header_secondary} position:absolute;
  opacity: ${props=> props.on ? "0" : "1"};
  transition: all 0.7s cubic-bezier(1.000,0.000,0.000,1.000);
  bottom: 7%;
  left: 10%;
`;
const BackCard = styled.div`
  position: absolute;
  top: 0;
  left: ${props => (props.on ? '0' : '-40rem')};
  width: 36rem;
  height: 50rem;
  transition: all 0.7s cubic-bezier(1.000,0.000,0.000,1.000);
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  padding: 3rem;
`;
const BackTitle = styled.h3`
  ${props => props.theme.font.header_secondarySmall};
  margin-top: 3rem;
`;
const SubBackTitle = styled.p`
  ${props => props.theme.font.para_tertiary};
  margin-top: 3rem;
  color: ${props => props.theme.colors.GREY_LIGHT_2} !important;
`;
const BackContent = styled.p`
  ${props => props.theme.font.para_tertiary};
  margin-top: 3rem;
  font-weight: 200 !important;
  line-height: 1.7 !important;
`;

const MainCategory = ({
  onMouseOver1,
  onMouseLeave1,
  toggle1,
  onMouseOver2,
  onMouseLeave2,
  toggle2,
  onMouseOver3,
  onMouseLeave3,
  toggle3
}) => {
  return (
    <Section>
      <TitleBox>
        <SubTitle>Honhang's main service</SubTitle>
        <Title>혼행 주요 서비스 소개</Title>
      </TitleBox>
      <Category>
        <Row>
          <Card onMouseOver={onMouseOver1}>
            <Img src={require('../common/img/travel_1.jpg')} alt="travel_1" />
            <CardTitle on={toggle1} white>동행인 검색.</CardTitle>
          </Card>
          <BackCard on={toggle1} onMouseLeave={onMouseLeave1}>
            <BackTitle white>편리한 동행인 검색이 가능합니다.</BackTitle>
            <BackContent white>
              키워드와 날짜를 검색하여 현재 동행 모집글을 검색합니다.
              <br /> 검색후에는 간편하게 동행인의 프로필을 확인할 수 있습니다.
              <br /> 또한, 모든 등록된 동행인은 신원확인 절차를 통해 인증된 동행인입니다.
            </BackContent>
          </BackCard>
        </Row>
        <Row>
          <Card onMouseOver={onMouseOver2}>
            <Img src={require('../common/img/travel_2.jpg')} alt="travel_2" />
            <CardTitle on={toggle2} white>로컬 멘토 서비스.</CardTitle>
          </Card>
          <BackCard on={toggle2} onMouseLeave={onMouseLeave2}>
            <SubBackTitle white>서비스 예정입니다.</SubBackTitle>
            <BackTitle white>로컬 멘토와 매칭합니다.</BackTitle>
            <BackContent white>
              현지의 거주하고 있는 한국인 멘토를 여행자와 연결하여 정보를
              공유하고 긴급한 상황에 신속하게 도움을 줄 수 있도록 서비스합니다.
            </BackContent>
          </BackCard>
        </Row>
        <Row>
          <Card onMouseOver={onMouseOver3}>
            <Img src={require('../common/img/travel_3.jpg')} alt="travel_3" />
            <CardTitle on={toggle3} white>혼행 스토리.</CardTitle>
          </Card>
          <BackCard on={toggle3} onMouseLeave={onMouseLeave3}>
            <SubBackTitle white>서비스 예정입니다.</SubBackTitle>
            <BackTitle white>혼행의 리얼 팁을 제공합니다.</BackTitle>
            <BackContent white>
              안전한 여행이 되기 위한 팁과 1년 이내에 작성된 혼행 후기들을 모아
              제공하고 동행을 이뤄 같이 여행하면 좋았던 여행지들을 소개합니다.
            </BackContent>
          </BackCard>
        </Row>
      </Category>
    </Section>
  );
};

export default MainCategory;
