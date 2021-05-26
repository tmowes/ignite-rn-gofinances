import React from 'react'

import * as S from './styles'
import { HighlightCardProps } from './types'

const icon = {
  INCOME: 'arrow-up-circle',
  EXPENSE: 'arrow-down-circle',
  TOTAL: 'dollar-sign',
}

export const HighlightCard = (props: HighlightCardProps) => {
  const { type, title, amount, lastTransaction } = props
  return (
    <S.Container type={type}>
      <S.Header>
        <S.Title type={type}>{title}</S.Title>
        <S.ArrowIcon name={icon[type]} type={type} />
      </S.Header>
      <S.Content>
        <S.Amount type={type}>{amount}</S.Amount>
        <S.LastTransaction type={type}>{lastTransaction}</S.LastTransaction>
      </S.Content>
    </S.Container>
  )
}
