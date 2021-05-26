import { RectButtonProps } from 'react-native-gesture-handler'

export type TransactionTypeButtonProps = RectButtonProps & {
  label: string
  type: TransactionType
  isActive: boolean
}

type TransactionType = 'INCOME' | 'EXPENSE'

export type ActiveStyledProps = StyledProps & {
  isActive: boolean
}

export type StyledProps = {
  type: TransactionType
}
