import React from 'react';
import styled from 'styled-components';
import { SpecialButton } from '../styles/ui/buttons';
import SideModal from '../common/SideModal';

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
  ${props => props.theme.font.para_tertiary};
  font-weight: 500 !important;
  width: 20%;
`;
const FormInput = styled.input`
  ${props => props.theme.font.para_tertiary};
  width: 35rem;
  height: 5rem;
  outline: none;
  padding-left: 1rem;
  border: 1px solid ${props => props.theme.colors.GREY_LIGHT_3};
  &::-webkit-input-placeholder {
    color: ${props => props.theme.colors.GREY_LIGHT_3};
  }
  &:focus {
    border-bottom: 2px solid ${props => props.theme.colors.TERIARY};
  }
`;
const ConfirmText = styled.p`
  ${props => props.theme.font.para_tiny};
  margin-left: 1.5rem;
  color: ${props => props.theme.colors.PRIMARY};
  font-weight: 500;
  text-decoration: underline;
`;
const FormCheck = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1.5rem;
`;
const Label = styled.label`
  ${props => props.theme.font.para_tertiary};
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

const AuthForm = ({
  isKakaoLogin,
  onHandleChange,
  onInsert,
  check1,
  check2,
  check3,
  checkAll,
  onCheckboxChange,
  onCheckboxAllChange
}) => {
  return (
    <FormContainer>
      <SideModal 
        modalState
        text="sdfsdfsd"
      />
      <FormElement>
        <FormText>이름</FormText>
        <FormInput
          type="text"
          name="name"
          placeholder="이름을 입력해주세요."
          onChange={onHandleChange}
          autoComplete="off"
          required
        />
      </FormElement>
      <FormElement>
        <FormText>나이</FormText>
        <FormInput
          type="text"
          name="age"
          placeholder="나이를 입력해주세요."
          onChange={onHandleChange}
          autoComplete="off"
          required
        />
      </FormElement>
      <FormElement>
        <FormText>거주도시</FormText>
        <FormInput
          type="text"
          name="city"
          placeholder="거주도시를 입력해주세요."
          onChange={onHandleChange}
          autoComplete="off"
          required
        />
      </FormElement>
      <FormElement>
        <FormText>휴대폰번호</FormText>
        <FormInput
          type="text"
          name="phone"
          placeholder="- 없이 숫자만 입력해주세요."
          onChange={onHandleChange}
          autoComplete="off"
          required
        />
      </FormElement>
      <FormElement>
        <FormText>카카오톡ID</FormText>
        <FormInput
          type="text"
          name="kakaoId"
          placeholder="내 카카오톡 ID"
          onChange={onHandleChange}
          autoComplete="off"
          required
        />
      </FormElement>
      <FormElement>
        <FormText>카카오톡 연동</FormText>
        {/* 카카오버튼 */}
        <a id="kakao-login-btn">&nbsp;</a>
        {isKakaoLogin && (
          <ConfirmText>카카오 프로필 연동이 완료되었습니다!</ConfirmText>
        )}
      </FormElement>
      <FormElement>
        <FormCheck type="checkbox" name="check1" checked={check1} onChange={onCheckboxChange} id="auth-agree1" />
        <Label htmlFor="auth-agree1">이용약관 동의</Label>
        <Atag>내용보기</Atag>
      </FormElement>
      <FormElement>
        <FormCheck type="checkbox" name="check2" checked={check2} onChange={onCheckboxChange} id="auth-agree2" />
        <Label htmlFor="auth-agree2">개인정보 수집 및 이용에 대한 동의</Label>
        <Atag>내용보기</Atag>
      </FormElement>
      <FormElement>
        <FormCheck type="checkbox" name="check3" checked={check3} onChange={onCheckboxChange} id="auth-agree3" />
        <Label htmlFor="auth-agree3">개인정보 수집 및 이용안내</Label>
        <Atag>내용보기</Atag>
      </FormElement>
      <FormElement>
        <FormCheck type="checkbox" checked={checkAll} onChange={onCheckboxAllChange} id="auth-agree4" />
        <Label htmlFor="auth-agree4">
          사이트 이용을 위한 이용약관, 개인정보 수집 및 이용에 모두 동의합니다.
        </Label>
        <Atag>내용보기</Atag>
      </FormElement>
      <FormButtonBox>
        <SpecialButton white marginRight>
          취소
        </SpecialButton>
        <SpecialButton onClick={onInsert}>확인</SpecialButton>
      </FormButtonBox>
    </FormContainer>
  );
};

export default AuthForm;
