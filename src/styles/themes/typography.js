import { css } from 'styled-components';

const header_primary = css`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  line-height: 1.7;
  color: ${props => (props.white ? '#fff' : '#222')};
`;

const header_secondary = css`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  font-size: 2.15rem;
  line-height: 1.7;
  color: ${props => (props.white ? '#fff' : '#222')};
`;

const header_secondarySmall = css`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  font-size: 1.9rem;
  line-height: 1.7;
  color: ${props => (props.white ? '#fff' : '#222')};
`;

const header_tertiary = css`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  font-size: 1.7rem;
  line-height: 1.7;
  color: ${props => (props.white ? '#fff' : '#222')};
`;

const english_big = css`
  font-family: 'Lato', serif;
  text-decoration: none;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.7;
  color: ${props => (props.white ? '#fff' : '#222')};
`;

const english_small = css`
  font-family: 'Lato', serif;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.7;
  color: ${props => (props.white ? '#fff' : '#222')};
`;

const english_primary = css`
  font-family: 'Lato', serif;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.7;
  color: ${props => (props.white ? '#fff' : '#222')};
`;

const sub_header = css`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.7;
  color: ${props => {
    if (props.white) {
      return '#fff';
    } else if (props.primary) {
      return '#ff6699';
    } else {
      return '#222';
    }
  }};
`;

const para_primary = css`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.7;
  color: ${props => (props.white ? '#fff' : '#222')};
`;

const para_secondary = css`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.7;
  color: ${props => (props.white ? '#fff' : '#222')};
`;

const para_tertiary = css`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.7;
  color: ${props => (props.white ? '#fff' : '#222')};
`;
const para_forth = css`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 400;
  font-size: 1.35rem;
  line-height: 1.7;
  color: ${props => (props.white ? '#fff' : '#222')};
`;
const para_small = css`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.7;
  color: ${props => (props.white ? '#fff' : '#222')};
`;
const para_tiny = css`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.7;
  color: ${props => (props.white ? '#fff' : '#222')};
`;
const para_super_tiny = css`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 400;
  font-size: 1.15rem;
  line-height: 1.7;
  color: ${props => (props.white ? '#fff' : '#222')};
`;

export default {
  header_primary,
  header_secondary,
  header_secondarySmall,
  header_tertiary,
  english_big,
  english_small,
  english_primary,
  sub_header,
  para_primary,
  para_secondary,
  para_tertiary,
  para_forth,
  para_small,
  para_tiny,
  para_super_tiny
};
