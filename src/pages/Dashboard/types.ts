export type Transaction = {
  id: string
  type: TransactionType
  title: string
  amount: string
  category: Category
  transactionDate: string
}

type TransactionType = 'INCOME' | 'EXPENSE'

type Category = {
  name: string
  icon: string
}
