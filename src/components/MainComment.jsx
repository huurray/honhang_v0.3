import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 60rem;
  height: 40rem;
  margin: 0 auto;
  padding-top: 3rem;
  text-align: center;
`;
const MainCommentTiny = styled.div`
  ${props => props.theme.font.para_tiny};
  margin: 3rem 0 1rem 0;
`;
const MainCommentSecondary = styled.div`
  ${props => props.theme.font.header_secondary};
  margin-bottom: 4rem;
`;
const MainCommentSmall = styled.div`
  ${props => props.theme.font.para_small};
  margin-bottom: 4rem;
`;
const MainCommentTeriary = styled.div`
  ${props => props.theme.font.header_tertiary};
`;

const MainComment = () => {
  return (
    <Section>
      <MainCommentTiny>
        <strong>일상에 지친 내가</strong>
      </MainCommentTiny>
      <MainCommentSecondary>
        혼자 떠나는, 혼자가 아닌 여행.
      </MainCommentSecondary>
      <MainCommentSmall>
        '혼행'은 2018년 트렌드 키워드로 주위 사람들에게서 벗어나 조용한 시간을
        보내기 위해 홀로 여행을 떠나는 것을 말합니다. 일행의 눈치를 볼 필요도
        없고, 내 방식대로 여행할 수 있다는 장점이 있죠.
        <br />
        <br /> 이러한 트렌트에 맞춰 혼행 서비스는 믿을 수 있는 동행매칭과
        현지멘토매칭 그리고 홀로 여행을 위한 실시간 여행정보와 팁을 제공하여
        고객님이 안전한 혼행을 다녀오시는 것을 목표로 하고 있습니다.
      </MainCommentSmall>
      <MainCommentTeriary>
        "그러니 혼행을 두려워하지마세요. 분명 좋은 여행이 될거에요."
      </MainCommentTeriary>
    </Section>
  );
};

export default MainComment;
