import React from 'react'

import * as S from './styles'
import { IconButtonProps } from './types'

export const IconButton = (props: IconButtonProps) => {
  const { icon, ...attrs } = props
  return <S.Container {...attrs}>{icon}</S.Container>
}
