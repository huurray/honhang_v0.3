import React from 'react';
import styled from 'styled-components';
import backImg from '../common/img/signin-back.jpg';
import { SpecialButton } from '../styles/ui/buttons';

const Bg = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to right bottom, #f7f7f7, #eee);
  position: relative;
`;
const CardBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40rem;
  height: 55rem;
  border-radius: 5px;
  background-image: url(${backImg});
  background-size: cover;
  overflow: hidden;
  transition: 0.5s;
`;
const CardTitle = styled.div`
  ${props => props.theme.font.header_secondarySmall};
  text-align: center;
  margin: 5rem 0;
`;
const CardText = styled.div`
  ${props => props.theme.font.para_tertiary};
  text-align: center;
  margin: 3rem 0;
`;
const Copyright = styled.div`
  ${props => props.theme.font.para_small};
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const CardForm = styled.form`
  margin: 0 auto;
  width: 30rem;
`;
const FormEach = styled.div`
  text-align: center;
  &:first-child {
    margin-bottom: 1.5rem;
  }
`;
const Input = styled.input`
  ${props => props.theme.font.para_tertiary};
  padding: 1.5rem 2rem;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  width: 30rem;
  border-bottom: 3px solid transparent;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);
  margin-bottom: 0.5rem;
  transition: all 0.5s;

  &:focus {
    outline: none;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    border-bottom: 3px solid ${props => props.theme.colors.SECONDARY_DARK};
  }
  &:focus:invalid {
    border-bottom: 3px solid ${props => props.theme.colors.PRIMARY_DARK};
  }
  &::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
`;
const Label = styled.label`
  ${props => props.theme.font.para_tiny};
  text-align: left;
  color: ${props => props.theme.colors.WHITE_TRANS} !important;
  display: block;
  margin-left: 1rem;
`;
const ButtonBox = styled.div`
  text-align: center;
  margin: 3rem;
`;
const FormRow = styled.div`
  margin-top: 2rem;
  text-align: center;
`;
const FormLink = styled.a`
  text-decoration: none;
  ${props => props.theme.font.para_primary};
  margin: 0.5rem;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid ${props => props.theme.colors.WHITE};
  }
`;
const SignUpCard = ({ history }) => {
  return (
    <Bg>
      <CardBox>
        <CardTitle white>SIGNUP</CardTitle>
        <CardText white>이메일 주소로 회원가입이 가능합니다.</CardText>
        <CardForm>
          <FormEach>
            <Input
              white
              type="email"
              placeholder="가입할 이메일 아이디"
              id="email"
              autoComplete="off"
              required
            />
            <Label white htmlFor="email">
              이메일을 입력해주세요.
            </Label>
          </FormEach>
          <FormEach>
            <Input
              white
              type="password"
              placeholder="가입할 비밀번호"
              id="password"
              autoComplete="off"
              required
            />
            <Label white htmlFor="password">
              비밀번호를 입력해주세요.
            </Label>
          </FormEach>
          <ButtonBox>
            <SpecialButton>간단 회원가입</SpecialButton>
          </ButtonBox>
          <FormRow>
            <FormLink
              onClick={() => {
                history.push('/signin');
              }}
              white
            >
              이미 아이디가 있으신가요?
            </FormLink>
          </FormRow>
        </CardForm>
      </CardBox>
      <Copyright>&copy;2018 Hurray All Rights Reserved</Copyright>
    </Bg>
  );
};

export default SignUpCard;
