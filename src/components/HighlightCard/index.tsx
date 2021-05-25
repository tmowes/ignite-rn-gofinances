import React from 'react'

import * as S from './styles'

export const HighlightCard = () => (
  <S.Container>
    <S.Header>
      <S.Title>Entrada</S.Title>
      <S.ArrowIcon name="arrow-up-circle" />
    </S.Header>
    <S.Content>
      <S.Amount>R$6900,00</S.Amount>
      <S.LastTransaction>Última entrada dia 24 de maio</S.LastTransaction>
    </S.Content>
  </S.Container>
)
