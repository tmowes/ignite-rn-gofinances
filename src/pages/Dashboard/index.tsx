import React from 'react'

import * as C from '../../components'
import { transactionData } from '../../data'
import * as S from './styles'
import { Transaction } from './types'

export const Dashboard = () => (
  <S.Container>
    <S.Header>
      <S.UserContainer>
        <S.UserInfo>
          <S.Avatar source={{ uri: 'http://github.com/tmowes.png' }} />
          <S.Greetings>
            <S.Title>Olá,</S.Title>
            <S.UserName>Julius</S.UserName>
          </S.Greetings>
          <S.PowerIcon />
        </S.UserInfo>
      </S.UserContainer>
    </S.Header>
    <S.HighlightCards>
      <C.HighlightCard
        type="INCOME"
        title="Entradas"
        amount="R$6900,00"
        lastTransaction="Última entrada dia 24 de maio"
      />
      <C.HighlightCard
        type="EXPENSE"
        title="Saídas"
        amount="R$6900,00"
        lastTransaction="Última entrada dia 24 de maio"
      />
      <C.HighlightCard
        type="TOTAL"
        title="Total"
        amount="R$6900,00"
        lastTransaction="01 à 24 de maio"
      />
    </S.HighlightCards>

    <S.Transactions>
      <S.Title>Transações</S.Title>
      <S.TransactionsList
        data={transactionData as Transaction[]}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <C.TransactionCard data={item} />}
      />
    </S.Transactions>
  </S.Container>
)
