import React from 'react'

import * as S from './styles'
import { TransactionTypeButtonProps } from './types'

const icon = {
  INCOME: 'arrow-up-circle',
  EXPENSE: 'arrow-down-circle',
}

export const TransactionTypeButton = (props: TransactionTypeButtonProps) => {
  const { label = '', type, isActive, ...attrs } = props
  return (
    <S.Container isActive={isActive} type={type}>
      <S.Button {...attrs}>
        <S.Icon name={icon[type]} type={type} />
        <S.Title>{label}</S.Title>
      </S.Button>
    </S.Container>
  )
}
