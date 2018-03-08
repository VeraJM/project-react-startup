import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import Wrapper from './Wrapper';
import AccountSection from './AccountSection';
import TransactionsSection from './TransactionsSection';

const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid black;
  width: 100%;
  height: 80%;
`;

export default function App() {
  return (
    <Wrapper>
      <Banner />
      <Table>
        <tbody>
          <tr>
            <td width="30%"><AccountSection /></td>
            <td><TransactionsSection /></td>
          </tr>
        </tbody>
      </Table>
    </Wrapper>
  );
}
