import React, { useCallback, useState } from 'react'
import { ActivityIndicator } from 'react-native'

import { useFocusEffect } from '@react-navigation/native'

import * as C from '../../components'
import { loadTransactions } from '../../libs/storage'
import {
  formatCurrency,
  formatDate,
  formatDateLong,
  lastTransactionDate,
} from '../../utils'
import * as S from './styles'
import { Transaction } from './types'
import { initialHighlightData } from './initialState'
import { useAuth } from '../../contexts'

export const Dashboard = () => {
  const { user, signOut } = useAuth()
  const [isLoading, setIsLoading] = useState(true)
  const [transactionsList, setTransactionsList] = useState<Transaction[]>([])

  const [highlightData, setHighlightData] = useState(initialHighlightData)

  const loadAsyncStorage = useCallback(async () => {
    try {
      const storageTransactions = await loadTransactions(user.id)
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

      const lastIncomeDate = lastTransactionDate(storageTransactions, 'INCOME')

      const lastExpenseDate = lastTransactionDate(storageTransactions, 'EXPENSE')

      const formattedHighlightData = {
        incomes: {
          total: formatCurrency(incomeSum),
          lastTransaction:
            lastIncomeDate === 0
              ? 'Sem entradas cadastradas'
              : `Última entrada dia ${formatDateLong(new Date(lastIncomeDate))}`,
        },
        expenses: {
          total: formatCurrency(expenseSum),
          lastTransaction:
            lastExpenseDate === 0
              ? 'Sem saidas cadastradas'
              : `Última saída dia ${formatDateLong(new Date(lastExpenseDate))}`,
        },
        total: {
          total: formatCurrency(incomeSum - expenseSum),
          lastTransaction: `01 a ${formatDateLong(new Date())}`,
        },
      }

      setHighlightData(formattedHighlightData)
      setTransactionsList(formattedTransactions)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }, [user.id])

  useFocusEffect(
    useCallback(() => {
      loadAsyncStorage()
    }, [loadAsyncStorage])
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
            <S.Avatar source={{ uri: user.photo }} />
            <S.Greetings>
              <S.Title>Olá,</S.Title>
              <S.UserName>{user.name}</S.UserName>
            </S.Greetings>
            <C.IconButton
              style={{
                marginLeft: 'auto',
              }}
              onPress={signOut}
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
