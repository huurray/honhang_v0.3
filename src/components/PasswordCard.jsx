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
  margin: 7rem 0;
`;
const CardText = styled.div`
  ${props => props.theme.font.para_tertiary};
  text-align: center;
  margin: 3rem 0;
  line-height: 2 !important;
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
  margin-top: 5rem;
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
const PasswordCard = ({ history }) => {
  return (
    <Bg>
      <CardBox>
        <CardTitle white>NEW PASSWORD</CardTitle>
        <CardText white>
          가입하신 이메일 주소를 통해 <br />
          비밀번호 변경 메일이 발송됩니다.
        </CardText>
        <CardForm>
          <FormEach>
            <Input
              white
              type="email"
              placeholder="이메일 아이디"
              id="email"
              autoComplete="off"
              required
            />
            <Label white htmlFor="email">
              가입하신 이메일 ID
            </Label>
          </FormEach>
          <ButtonBox>
            <SpecialButton>비밀번호 변경</SpecialButton>
          </ButtonBox>
          <FormRow>
            <FormLink
              onClick={() => {
                history.push('/signin');
              }}
              white
            >
              로그인하기
            </FormLink>
            <FormLink
              onClick={() => {
                history.push('/signup');
              }}
              white
            >
              간단 회원가입
            </FormLink>
          </FormRow>
        </CardForm>
      </CardBox>
      <Copyright>&copy;2018 Hurray All Rights Reserved</Copyright>
    </Bg>
  );
};

export default PasswordCard;
