import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const OperandoTitle = Title.extend`
  text-align: left;
  &:hover {
    background: palevioletred;
  }
`;
const WrapperBanner = styled.div`
  height: 20%;
`;

export default function Banner() {
  return (
    <WrapperBanner>
      <OperandoTitle>Operando Web</OperandoTitle>
    </WrapperBanner>
  );
}
