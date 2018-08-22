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

const sizes = {
  desktop: 1200,
  tablet: 900,
  phone: 600
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})


export default {
  clearfix,
  absoluteCenter,
  media
};