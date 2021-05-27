export type Transaction = {
  id: string
  title: string
  amount: string
  type: TransactionType
  category: string
  created_at: string
  updated_at: string
}

type TransactionType = 'INCOME' | 'EXPENSE'
