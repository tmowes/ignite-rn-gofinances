import React from 'react'

import * as S from './styles'
import { InputProps } from './types'

export const Input = (props: InputProps) => {
  const { ...attrs } = props
  return <S.Container {...attrs} />
}
