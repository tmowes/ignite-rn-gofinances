import { TouchableOpacityProps } from 'react-native'

export type TransactionTypeButtonProps = TouchableOpacityProps & {
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
