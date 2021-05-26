import React from 'react'

import * as S from './styles'
import { TransactionCardProps } from './types'

export const TransactionCard = ({ data }: TransactionCardProps) => {
  const { type, title, amount, category, transactionDate } = data
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Amount type={type}>
        {type === 'EXPENSE' ? `- ${amount}` : `${amount}`}
      </S.Amount>
      <S.Content>
        <S.CategoryIcon name={category.icon} />
        <S.CategoryName>{category.name}</S.CategoryName>
        <S.TransactionDate>{transactionDate}</S.TransactionDate>
      </S.Content>
    </S.Container>
  )
}
