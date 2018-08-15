import styled from 'styled-components';

export const SpecialButton = styled.button`
  width: ${props => (props.full ? '100%' : '20rem')};
  height: 5rem;
  display: inline-block;
  border-radius: 1.5rem;
  position: relative;
  border: none;
  outline: none;
  cursor: pointer;

  /* border gradient */
  border: double 2px transparent;
  background-image: ${props =>
      props.white
        ? 'linear-gradient(white, white)'
        : 'linear-gradient(transparent, transparent)'},
    radial-gradient(circle at top left, #9999ff, #9966ff, #cc33cc, #ff66cc);
  background-origin: border-box;
  background-clip: content-box, border-box;

  color: ${props => (props.white ? '#333' : '#fff')} !important;
  ${props => props.theme.font.para_primary};
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);

  margin-right: ${props => props.marginRight && '2rem'};

  &::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 1.5rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    &::after {
      transform: scaleX(1.2) scaleY(1.4);
      background-image: linear-gradient(transparent, transparent),
        radial-gradient(circle at top left, #9999ff, #9966ff, #cc33cc, #ff66cc);
      opacity: 0;
    }
  }

  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;
