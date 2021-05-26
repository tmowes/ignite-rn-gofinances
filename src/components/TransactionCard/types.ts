export type TransactionCardProps = {
  data: Transaction
}

export type Transaction = {
  id: string
  type: TransactionType
  title: string
  amount: string
  category: Category
  transactionDate: string
}

type TransactionType = 'INCOME' | 'EXPENSE'

export type StyledProps = {
  type: TransactionType
}

export type Category = {
  name: string
  icon: string
}
