import styled, { css } from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
  background: transparent;
  text-align: center;

  // Acá estamos diciendo que cuando le seteamos la prop primary al component, se aplique css adicional
  ${props => props.primary && css`
  background: white;
  color: red;
  `}
`;
export default Title;
