import { FC } from 'react'

import { RectButtonProps } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'

export type SignInSocialButtonProps = RectButtonProps & {
  label: string
  svg: FC<SvgProps>
}
