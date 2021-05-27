import React from 'react'

import * as S from './styles'
import { HistoryCardProps } from './types'

export const HistoryCard = ({ data }: HistoryCardProps) => {
  const { title, amountFormatted, color } = data

  return (
    <S.Container color={color}>
      <S.Title>{title}</S.Title>
      <S.Amount>{amountFormatted}</S.Amount>
    </S.Container>
  )
}
