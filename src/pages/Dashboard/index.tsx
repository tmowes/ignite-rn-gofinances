import React, { useCallback, useState } from 'react'
import { ActivityIndicator } from 'react-native'

import { useFocusEffect } from '@react-navigation/native'

import * as C from '../../components'
import { loadTransactions } from '../../libs/storage'
import { formatCurrency, formatDate, formatDateLong } from '../../utils'
import * as S from './styles'
import { Transaction } from './types'
import { initialHighlightData } from './initialState'

export const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [transactionsList, setTransactionsList] = useState<Transaction[]>([])

  const [highlightData, setHighlightData] = useState(initialHighlightData)

  const loadAsyncStorage = async () => {
    const storageTransactions = await loadTransactions()
    let incomeSum = 0
    let expenseSum = 0
    const formattedTransactions: Transaction[] = storageTransactions.map(
      transaction => {
        if (transaction.type === 'INCOME') {
          incomeSum += Number(transaction.amount)
        } else {
          expenseSum += Number(transaction.amount)
        }
        const amount = formatCurrency(Number(transaction.amount))
        const created_at = formatDate(new Date(transaction.created_at))
        return {
          ...transaction,
          amount,
          created_at,
        }
      }
    )

    const lastIncomeDate = Math.max(
      ...storageTransactions
        .filter(transaction => transaction.type === 'INCOME')
        .map(transaction => new Date(transaction.created_at).getTime())
    )

    const lastExpenseDate = Math.max(
      ...storageTransactions
        .filter(transaction => transaction.type === 'INCOME')
        .map(transaction => new Date(transaction.created_at).getTime())
    )

    const formattedHighlightData = {
      incomes: {
        total: formatCurrency(incomeSum),
        lastTransaction: `Última entrada dia ${formatDateLong(
          new Date(lastIncomeDate)
        )}`,
      },
      expenses: {
        total: formatCurrency(expenseSum),
        lastTransaction: `Última saída dia ${formatDateLong(
          new Date(lastExpenseDate)
        )}`,
      },
      total: {
        total: formatCurrency(incomeSum - expenseSum),
        lastTransaction: `01 a ${formatDateLong(new Date())}`,
      },
    }

    setHighlightData(formattedHighlightData)
    setTransactionsList(formattedTransactions)
    setIsLoading(false)
  }

  useFocusEffect(
    useCallback(() => {
      loadAsyncStorage()
    }, [])
  )

  if (isLoading) {
    return (
      <S.Container style={{ justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#fff" />
      </S.Container>
    )
  }

  return (
    <S.Container>
      <S.Header>
        <S.UserContainer>
          <S.UserInfo>
            <S.Avatar source={{ uri: 'http://github.com/tmowes.png' }} />
            <S.Greetings>
              <S.Title>Olá,</S.Title>
              <S.UserName>Julius</S.UserName>
            </S.Greetings>
            <C.IconButton
              style={{
                marginLeft: 'auto',
              }}
              onPress={() => true}
              icon={<S.PowerIcon />}
            />
          </S.UserInfo>
        </S.UserContainer>
      </S.Header>
      <S.HighlightCards>
        <C.HighlightCard
          type="INCOME"
          title="Entradas"
          amount={highlightData.incomes.total}
          lastTransaction={highlightData.incomes.lastTransaction}
        />
        <C.HighlightCard
          type="EXPENSE"
          title="Saídas"
          amount={highlightData.expenses.total}
          lastTransaction={highlightData.expenses.lastTransaction}
        />
        <C.HighlightCard
          type="TOTAL"
          title="Total"
          amount={highlightData.total.total}
          lastTransaction={highlightData.total.lastTransaction}
        />
      </S.HighlightCards>

      <S.Transactions>
        <S.Title>Transações</S.Title>
        <S.TransactionsList
          data={transactionsList as Transaction[]}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <C.TransactionCard data={item} />}
        />
      </S.Transactions>
    </S.Container>
  )
}
