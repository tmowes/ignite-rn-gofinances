const type = {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE',
  TOTAL: 'TOTAL',
}

export const transactionData = [
  {
    id: '1',
    title: 'Desenvolvimento de app',
    amount: 'R$6900,00',
    category: { name: 'Freela', icon: 'dollar-sign' },
    type: type.INCOME,
    transactionDate: '25/05/2021',
  },
  {
    id: '2',
    title: 'Hamburger',
    amount: 'R$69,00',
    category: { name: 'Food', icon: 'coffee' },
    type: type.EXPENSE,
    transactionDate: '25/05/2021',
  },
  {
    id: '3',
    title: 'Aluguel ap',
    amount: 'R$690,00',
    category: { name: 'Freela', icon: 'home' },
    type: type.EXPENSE,
    transactionDate: '25/05/2021',
  },
  {
    id: '4',
    title: 'Desenvolvimento de app',
    amount: 'R$6900,00',
    category: { name: 'Freela', icon: 'dollar-sign' },
    type: type.INCOME,
    transactionDate: '25/05/2021',
  },
]
