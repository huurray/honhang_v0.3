import { css } from 'styled-components';

const clearfix = css`
  &::after {
    content: '';
    display: table;
    clear: both;
  }
`;

const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default {
  clearfix,
  absoluteCenter
};