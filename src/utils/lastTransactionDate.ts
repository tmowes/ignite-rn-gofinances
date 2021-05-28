import { TransactionType } from '../pages/Register/types'
import { Transaction } from '../pages/Dashboard/types'

export const lastTransactionDate = (
  transactions: Transaction[],
  type: TransactionType
) => {
  const filteredByType = transactions.filter(transaction => transaction.type === type)

  if (filteredByType.length === 0) {
    return 0
  }

  return Math.max(
    ...transactions.map(transaction => new Date(transaction.created_at).getTime())
  )
}
