import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 5rem;
  display: inline-block;
  border-radius: 1.5rem;
  position: relative;
  border: none;
  outline: none;
  cursor: pointer;
  background-image: linear-gradient(25deg, #9999ff, #9966ff, #cc33cc, #ff66cc);
  color: ${props => props.theme.colors.WHITE} !important;
  ${props => props.theme.font.para_primary};
  box-shadow: 0 1rem 2rem rgba(0,0,0, 0.4);
  
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
    box-shadow: 0 0.5rem 1rem rgba(0,0,0, 0.2);
    &::after {
      transform: scaleX(1.2) scaleY(1.4);
      background-image: linear-gradient(25deg, #9999ff, #9966ff, #cc33cc, #ff66cc);
      opacity: 0;
    }
  }

  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(0,0,0, 0.2);
  }
`;
