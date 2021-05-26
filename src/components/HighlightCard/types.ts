export type HighlightCardProps = {
  title: string
  amount: string
  lastTransaction: string
  type: TransactionType
}

type TransactionType = 'INCOME' | 'EXPENSE' | 'TOTAL'

export type StyledProps = {
  type: TransactionType
}
