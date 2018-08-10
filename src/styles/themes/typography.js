import { css } from 'styled-components';

const header_primary = css`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 3rem;
  line-height: 1.4;
  color: ${props => (props.white ? '#fff' : '#222')};
`;

const header_secondary = css`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 1.4;
  color: ${props => (props.white ? '#fff' : '#222')};
`;

const header_tertiary = css`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1.4;
  color: ${props => (props.white ? '#fff' : '#222')};
`;

const english_primary = css`
  font-family: 'Lato', serif;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.4;
  color: ${props => (props.white ? '#fff' : '#222')};
`;

const sub_header = css`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.4;
  color: ${props => {
    if (props.white) {
      return '#fff';
    } else if (props.primary_light) {
      return '#ff8cb1';
    } else if (props.primary) {
      return '#ff6699';
    }else {
      return '#222';
    }
  }};
`;

const para_primary = css`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 300;
  font-size: 1.6rem;
  line-height: 1.4;
  color: ${props => (props.white ? '#fff' : '#222')};
`;

const para_secondary = css`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 1.4;
  color: ${props => (props.white ? '#fff' : '#222')};
`;

const para_tertiary = css`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 1.4;
  color: ${props => (props.white ? '#fff' : '#222')};
`;
const para_small = css`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 1.4;
  color: ${props => (props.white ? '#fff' : '#222')};
`;
const para_tiny = css`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 1.4;
  color: ${props => (props.white ? '#fff' : '#222')};
`;

export default {
  header_primary,
  header_secondary,
  header_tertiary,
  english_primary,
  sub_header,
  para_primary,
  para_secondary,
  para_tertiary,
  para_small,
  para_tiny
};