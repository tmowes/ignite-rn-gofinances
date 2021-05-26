import { TextInputProps } from 'react-native'

import { Control } from 'react-hook-form'

export type InputFormProps = TextInputProps & {
  control: Control
  name: string
  error: string
}
