import React from 'react';
import styled from 'styled-components';

const SideModalBox = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => props.on ? "block" : "none"};
  z-index: 999;
`;
const Modal = styled.div`
  position: absolute;
  top: 15%;
  right: ${props => props.on ? "3rem" : "-35rem"};
  transition: all 3s;
  width: 32rem;
  height: 6rem;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  width: 2rem;
  height: auto;
  float: left;
  margin-right: 1rem;
`;
const Text = styled.h2`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.4rem;
  line-height: 2;
`;

const SideModal = ({text, modalState, hideSideModal}) => {
  return (
    <SideModalBox on={modalState} onClick={hideSideModal}>
      <Modal on={modalState}>
        <Img src={require('./img/icon-info.png')} alt="icon-info" />
        <Text>{text}</Text>
      </Modal>
    </SideModalBox>
  );
};

export default SideModal;
