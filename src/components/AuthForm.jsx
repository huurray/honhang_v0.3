import React from 'react';
import styled from 'styled-components';
import { Button } from '../styles/ui/buttons'

const FormContainer = styled.div`
  width: 60%;
  height: 125rem;
  margin: 0 auto;
  padding-top: 8rem;
`;
const FormElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  height: 8rem;
  padding-left: 3rem;
  position: relative;
  &:first-child {
    border-top: 3px solid ${props => props.theme.colors.BLACK};
  }
  &:not(:first-child) {
    border-top: 1px solid ${props => props.theme.colors.GREY_LIGHT_3};
  }
  &:last-child {
    background-color: ${props => props.theme.colors.GREY_LIGHT_2};
  }
`;
const FormText = styled.h2`
  ${props => props.theme.font.para_small};
  width: 20%;
`;
const FormInput = styled.input`
  ${props => props.theme.font.para_small};
  width: 30%;
  height: 5rem;
  outline: none;
  padding-left: 1rem;
  border: 1px solid ${props => props.theme.colors.GREY_LIGHT_3};
  &::-webkit-input-placeholder {
    color: {props => props.theme.colors.GREY_LIGHT_3};
  }
`;
const FormCheck = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1.5rem;
`;
const Label = styled.label`
  ${props => props.theme.font.para_small};
`;
const Atag = styled.a`
  margin-left: 1rem;
  color: {props => props.theme.colors.GREY_DARK_3};
  text-decoration: underline;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
`;
const FormButtonBox = styled.div`
  text-align: center;
  margin-top: 5rem;
`;

const AuthForm = () => {
  return (
    <FormContainer>
      <FormElement>
        <FormText>이름</FormText>
        <FormInput
          type="text"
          id="myName"
          placeholder="이름을 입력해주세요."
          autoComplete="off"
          required
        />
      </FormElement>
      <FormElement>
        <FormText>나이</FormText>
        <FormInput
          type="text"
          id="myAge"
          placeholder="나이를 입력해주세요."
          autoComplete="off"
          required
        />
      </FormElement>
      <FormElement>
        <FormText>거주도시</FormText>
        <FormInput
          type="text"
          id="myCity"
          placeholder="거주도시를 입력해주세요."
          autoComplete="off"
          required
        />
      </FormElement>
      <FormElement>
        <FormText>휴대폰번호</FormText>
        <FormInput
          type="text"
          id="myPhone"
          placeholder="- 없이 숫자만 입력해주세요."
          autoComplete="off"
          required
        />
      </FormElement>
      <FormElement>
        <FormText>카카오톡ID</FormText>
        <FormInput
          type="text"
          id="myKakao"
          placeholder="내 카카오톡 ID"
          autoComplete="off"
          required
        />
      </FormElement>
      <FormElement>
        <FormText>카카오톡 연동</FormText>
        <a id="kakao-login-btn" />
      </FormElement>
      <FormElement>
        <FormCheck type="checkbox" id="auth-agree1" />
        <Label htmlFor="auth-agree1">이용약관 동의</Label>
        <Atag>내용보기</Atag>
      </FormElement>
      <FormElement>
        <FormCheck type="checkbox" id="auth-agree2" />
        <Label htmlFor="auth-agree2">개인정보 수집 및 이용에 대한 동의</Label>
        <Atag>내용보기</Atag>
      </FormElement>
      <FormElement>
        <FormCheck type="checkbox" id="auth-agree3" />
        <Label htmlFor="auth-agree3">개인정보 수집 및 이용안내</Label>
        <Atag>내용보기</Atag>
      </FormElement>
      <FormElement>
        <FormCheck type="checkbox" id="auth-agree4" />
        <Label htmlFor="auth-agree4">
          사이트 이용을 위한 이용약관, 개인정보 수집 및 이용에 모두 동의합니다.
        </Label>
        <Atag>내용보기</Atag>
      </FormElement>
      <FormButtonBox>
        <Button white marginRight>취소</Button>
        <Button>확인</Button>
      </FormButtonBox>
    </FormContainer>
  );
};

export default AuthForm;