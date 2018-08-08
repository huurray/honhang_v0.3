import { keyframes } from 'styled-components';

const zoomIn = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`;

export default {
  zoomIn
};
