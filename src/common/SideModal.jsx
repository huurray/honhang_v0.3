import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  display: ${props => (props.on ? 'block' : 'none')};
  z-index: 99;
  position: fixed;
  top: 16%;
  right: ${props => (props.on ? '3rem' : '-35rem')};
  transition: all 1s;
  width: 32rem;
  height: 6rem;
  background-color: #ff4272;
  border-radius: 0.5rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  overflow: hidden;
  display: flex;
  align-items: center;
  padding-left: 2rem;
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
  color: white;
`;
const Closer = styled.div`
  position: absolute;
  top: 45%;
  right: 5%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: white;
  cursor: pointer;
`;

const SideModal = ({ text, modalState, hideSideModal }) => {
  return (
    <Modal on={modalState}>
      <Img src={require('./img/icon-info.png')} alt="icon-info" />
      <Text>{text}</Text>
      <Closer onClick={hideSideModal}>&times;</Closer>
    </Modal>
  );
};

export default SideModal;
