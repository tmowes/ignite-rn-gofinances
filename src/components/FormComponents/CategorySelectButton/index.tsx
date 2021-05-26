import React from 'react'

import * as S from './styles'
import { CategorySelectButtonProps } from './types'

export const CategorySelectButton = (props: CategorySelectButtonProps) => {
  const { label = '', ...attrs } = props
  return (
    <S.Container>
      <S.Button {...attrs}>
        <S.Title>{label}</S.Title>
        <S.Icon name="chevron-down" />
      </S.Button>
    </S.Container>
  )
}
