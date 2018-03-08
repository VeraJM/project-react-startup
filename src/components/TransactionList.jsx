import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid black;
  width: 100%;
`;

export default function TransactionList({ transactions }) {
  const transactionItems = transactions.map(transaction => (
    <tr key={transaction.id}>
      <td>{transaction.id}</td>
      <td>{transaction.amount}</td>
    </tr>));
  return (
    <Table>
      <tbody>
        <tr>
          <td>ID</td>
          <td>AMOUNT</td>
        </tr>
        {transactionItems}
      </tbody>
    </Table>
  );
}
