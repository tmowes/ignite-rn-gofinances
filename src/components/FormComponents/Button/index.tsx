import React from 'react'

import * as S from './styles'
import { ButtonProps } from './types'

export const Button = (props: ButtonProps) => {
  const { label = '', onPress, ...attrs } = props
  return (
    <S.Container onPress={onPress} {...attrs}>
      <S.Title>{label}</S.Title>
    </S.Container>
  )
}
