import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingAni = keyframes`
  0% {
    margin: 0;
  }
  50% {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  100% {
    margin: 0;
  }
`;
const LoadingBox = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 99;
`;
const CircleBox = styled.div`
  position: absolute;
  top: ${props=>props.top ? "40%" : "50%"};
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Circle = styled.div`
  float: left;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  animation: ${LoadingAni} 1s ease-in-out infinite;
  background-color: ${props => {
    if(props.first) {
      return "rgba(153,153,255, 0.5)";
    } else if (props.second) {
      return "rgba(153,102,255, 0.5)";
    } else if (props.third) {
      return "rgba(204,51,204, 0.5)";
    }
  }};
`;


const Loading = ({top}) => {
  return (
    <LoadingBox>
      <CircleBox top={top}>
        <Circle first />
        <Circle second />
        <Circle third />
      </CircleBox>
    </LoadingBox>
  );
};

export default Loading;
