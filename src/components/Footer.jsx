import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.section`
  width: 100%;
  height: 30rem;
  background-color: ${props => props.theme.colors.GREY_DARK_3};
`;
const FooterBox = styled.div`
  width: 114rem;
  margin: 0 auto;
  padding-top: 8rem;
`;
const Row = styled.div`
  width: 25%;
  float: left;
`;
const LogoImg = styled.img`
  width: 15rem;
  height: auto;
`;
const FooterList = styled.ul`
  list-style: none;
`;
const FooterListItem = styled.li`
  ${props => props.theme.font.para_small};
  color: ${props => props.theme.colors.GREY_LIGHT_3} !important;
  font-weight: 100 !important;
  &:not(:last-child) {
    margin-bottom: 0.6rem;
  }
`;
const FooterTitle = styled.span`
  ${props => props.theme.font.para_small};
`;
const FooterLink = styled(Link)`
  ${props => props.theme.font.para_small};
  text-decoration: none;
  color: ${props => props.theme.colors.GREY_LIGHT_3};
  transition: all 0.2s;
  cursor: pointer;
  &:hover,
  &:active {
    color: ${props => props.theme.colors.PRIMARY};
    font-weight: 700;
    transform: rotate(2deg) scale(1.05);
  }
`;
const Footer = () => {
  return (
    <Section>
      <FooterBox>
        <Row>
          <LogoImg src={require('../common/img/logo-white.png')} alt="logo" />
        </Row>
        <Row>
          <FooterList>
            <FooterListItem white>
              <FooterTitle white>혼행 대표 :</FooterTitle> 허준혁
            </FooterListItem>
            <FooterListItem white>
              <FooterTitle white>개인정보관리책임자 :</FooterTitle> 허준혁
            </FooterListItem>
            <FooterListItem white>
              <FooterTitle white>사업자등록번호 :</FooterTitle> 000-00-00000
            </FooterListItem>
            <FooterListItem white>
              <FooterTitle white>통신판매업신고 :</FooterTitle> 2018-서울강남-00000
            </FooterListItem>
            <FooterListItem white>
              <FooterTitle white>주소 :</FooterTitle> 인천광역시 연수구 선학로 101
            </FooterListItem>
            <FooterListItem white>2018 &copy;Copyright Honhang. ALL right reserved</FooterListItem>
          </FooterList>
        </Row>
        <Row>
          <FooterList>
            <FooterTitle white>CONTACT US</FooterTitle>
            <FooterListItem white>010-6495-8078</FooterListItem>
            <FooterListItem white>AM 10:00 ~ PM 6:00</FooterListItem>
            <FooterListItem white>제휴문의 gjwnsgur91@naver.com</FooterListItem>
            <FooterTitle white>BANK INFO</FooterTitle>
            <FooterListItem white>국민 660402-01-513947 예금주 허준혁</FooterListItem>
          </FooterList>
        </Row>
        <Row>
          <FooterList>
            <FooterTitle white>INFOMATION</FooterTitle>
            <FooterListItem white>
              <FooterLink to="/">회사소개</FooterLink>
            </FooterListItem>
            <FooterListItem white>
              <FooterLink to="/qna">QnA</FooterLink>
            </FooterListItem>
            <FooterListItem white>
              <FooterLink to="/">서비스 이용약관</FooterLink>
            </FooterListItem>
            <FooterListItem white>
              <FooterLink to="/">개인정보 취급정책</FooterLink>
            </FooterListItem>
            <FooterListItem white>
              <FooterLink to="/">운영정책</FooterLink>
            </FooterListItem>
          </FooterList>
        </Row>
      </FooterBox>
    </Section>
  );
};

export default Footer;
