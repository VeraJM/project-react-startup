import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import Title from './Title';

const Section = styled(Wrapper)`
background: white;
width: 100%;
height: 100%;
`;

export default function AccountSection() {
  return (
    <Section>
      <Title>User : Name </Title>
    </Section>
  );
}
