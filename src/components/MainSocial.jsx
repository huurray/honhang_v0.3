import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  height: 15rem;
  padding-top: 6rem;
`;
const Social = styled.div`
  width: 50rem;
  height: 3rem;
  margin: 0 auto;
`;
const SocialBox = styled.div`
  width: 50%;
  height: 3rem;
  text-decoration: none;
  float: left;
  color: ${props => props.theme.colors.GREY_DARK_3};
  cursor:pointer;
`;
const Anchor = SocialBox.withComponent('a');
const LogoImg = styled.img`
  float: left;
  width: 2.5rem;
  height: auto;
  margin-left: 1rem;
`;
const SocialText = styled.h2`
  font-size: 2rem;
  font-family: 'Lato', serif;
  font-weight: 200;
  text-align:center;
`;
const MainSocial = () => {
  return (
    <Section>
      <Social>
        <Anchor href="https://www.facebook.com/honhang.me/?modal=admin_todo_tour">
          <LogoImg
            src={require('../common/img/facebook-black.png')}
            alt="facebook-black"
          />
          <SocialText>FACEBOOK</SocialText>
        </Anchor>
        <Anchor href="https://www.instagram.com/honhang.me/">
          <LogoImg
            src={require('../common/img/insta-black.png')}
            alt="facebook-black"
          />
          <SocialText>INSTAGRAM</SocialText>
        </Anchor>
      </Social>
    </Section>
  );
};

export default MainSocial;
