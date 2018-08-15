import React from 'react';
import styled from 'styled-components';

import '../common/datepicker.css';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import { SpecialButton } from '../styles/ui/buttons';

const FormContainer = styled.div`
  width: 60%;
  height: 100rem;
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
  width: 40rem;
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
const FormTextarea = styled.input`
  ${props => props.theme.font.para_tertiary};
  width: 80%;
  height: 20rem;
  margin-top: 15rem;
  padding-top: 1rem;
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
const FormButtonBox = styled.div`
  text-align: center;
  margin-top: 20rem;
`;

const MakeUpForm = ({
  onHandleChange,
  date,
  focused,
  onDateChange,
  onFocusChange,
  onInsert
}) => {
  return (
    <FormContainer>
      <FormElement>
        <FormText>제목</FormText>
        <FormInput
          type="text"
          name="title"
          placeholder="게시글 제목"
          onChange={onHandleChange}
          autoComplete="off"
          required
        />
      </FormElement>
      <FormElement>
        <FormText>여행지</FormText>
        <FormInput
          type="text"
          name="place"
          placeholder="에펠탑"
          onChange={onHandleChange}
          autoComplete="off"
          required
        />
      </FormElement>
      <FormElement>
        <FormText>날짜</FormText>
        <SingleDatePicker
          date={date}
          onDateChange={date => onDateChange(date)}
          focused={focused}
          onFocusChange={({ focused }) => onFocusChange(focused)}
          placeholder="19/07/2019"
          required
        />
      </FormElement>
      <FormElement>
        <FormText>최대인원</FormText>
        <FormInput
          type="number"
          name="howMany"
          placeholder="4"
          onChange={onHandleChange}
          autoComplete="off"
          required
        />
      </FormElement>
      <FormElement>
        <FormText>카카오톡ID</FormText>
        <FormInput
          type="text"
          name="kakao"
          placeholder="내 카카오톡 ID"
          onChange={onHandleChange}
          autoComplete="off"
          required
        />
      </FormElement>
      <FormElement>
        <FormText>하고싶은 말</FormText>
        <FormTextarea
          type="textarea"
          name="content"
          onChange={onHandleChange}
          maxlength="200"
          placeholder="하고싶은 말을 적어주세요~"
          autoComplete="off"
          required
        />
      </FormElement>

      <FormButtonBox>
        <SpecialButton white marginRight>
          취소
        </SpecialButton>
        <SpecialButton onClick={onInsert}>작성</SpecialButton>
      </FormButtonBox>
    </FormContainer>
  );
};

export default MakeUpForm;
