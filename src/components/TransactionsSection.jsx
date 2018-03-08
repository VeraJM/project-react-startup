import React from 'react';
import Title from './Title';
import Wrapper from './Wrapper';
import TransactionList from './TransactionList';

const transactions = [
  {
    id: 1,
    amount: 100
  },
  {
    id: 2,
    amount: 400
  }
];

export default function TransactionsSection() {
  return (
    <Wrapper>
      <Title primary>Transactions</Title>
      <TransactionList transactions={transactions} />
    </Wrapper>
  );
}
