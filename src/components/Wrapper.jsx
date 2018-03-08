import React from 'react';
import style from 'styled-components';

const Div = style.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
  background: papayawhip;
`;

export default function Wrapper({ className, children }) {
  return (
    <Div className={className}>{children}</Div>
  );
}
