import React from 'react'

import { categories } from '../../utils'
import * as S from './styles'
import { TransactionCardProps } from './types'

export const TransactionCard = ({ data }: TransactionCardProps) => {
  const { type, title, amount, category, created_at } = data

  const [categoryData] = categories.filter(cat => cat.key === category)

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Amount type={type}>
        {type === 'EXPENSE' ? `- ${amount}` : `${amount}`}
      </S.Amount>
      <S.Content>
        <S.CategoryIcon name={categoryData.icon} />
        <S.CategoryName>{categoryData.name}</S.CategoryName>
        <S.TransactionDate>{created_at}</S.TransactionDate>
      </S.Content>
    </S.Container>
  )
}
