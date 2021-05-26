import { RectButtonProps } from 'react-native-gesture-handler'

export type ButtonProps = Omit<RectButtonProps, 'onPress'> & {
  label: string
  onPress: () => void
}
