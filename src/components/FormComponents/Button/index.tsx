import React from 'react'

import * as S from './styles'
import { ButtonProps } from './types'

export const Button = (props: ButtonProps) => {
  const { label = '', ...attrs } = props
  return (
    <S.Container activeOpacity={0.7} {...attrs}>
      <S.Title>{label}</S.Title>
    </S.Container>
  )
}
