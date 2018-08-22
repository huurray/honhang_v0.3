import { injectGlobal, css } from 'styled-components';
import reset from 'styled-reset';

const sizes = {
  bigDesktop: 1600,
  desktop: 1280,
  tablet: 900,
  phone: 600
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export default () => injectGlobal`

  ${reset}

  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  html {
    font-size: 62.5%;

    ${media.bigDesktop`font-size: 50%;`}
    ${media.desktop`font-size: 45%;`}
    ${media.tablet`font-size: 40%;`}
    ${media.phone`font-size: 30%;`}

  }

  body {
    line-height: normal;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 0.8rem;
  }

  ::-webkit-scrollbar-track {
    background: rgba(51,51,51, 0.2);
  }

  ::-webkit-scrollbar-thumb {
    background: #777; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #333; 
  }
`;
