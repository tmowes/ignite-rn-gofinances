/* eslint-disable array-callback-return */
import React, { useCallback, useMemo, useState } from 'react'
import { ActivityIndicator, Keyboard, TouchableWithoutFeedback } from 'react-native'

import { VictoryPie } from 'victory-native'
import { useFocusEffect } from '@react-navigation/native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { RFValue } from 'react-native-responsive-fontsize'
import addMonths from 'date-fns/addMonths'
import format from 'date-fns/format'
import { ptBR } from 'date-fns/locale'

import * as C from '../../components'
import * as S from './styles'
import { loadTransactions } from '../../libs/storage'
import { categories, compareMonth, compareYear, formatCurrency } from '../../utils'
import { Category } from './types'
import { useAuth } from '../../contexts'

export const Resume = () => {
  const { user } = useAuth()

  const [isLoading, setIsLoading] = useState(true)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const tabHeight = useBottomTabBarHeight()

  const [categoriesList, setCategoriesList] = useState<Category[]>([])

  const selectedDateChange = (action: 'PREV' | 'NEXT') => {
    if (action === 'NEXT') {
      setSelectedDate(prev => addMonths(prev, 1))
    }
    if (action === 'PREV') {
      setSelectedDate(prev => addMonths(prev, -1))
    }
  }

  const selectedDateFormatted = useMemo(
    () => format(selectedDate, 'MMMM, yyyy', { locale: ptBR }),
    [selectedDate]
  )

  const loadAsyncStorage = useCallback(async () => {
    const storageTransactions = await loadTransactions(user.id)
    const expensesList = storageTransactions.filter(
      transaction =>
        transaction.type === 'EXPENSE' &&
        compareMonth(transaction.created_at, selectedDate) &&
        compareYear(transaction.created_at, selectedDate)
    )

    const expensesTotal = expensesList.reduce(
      (acc, item) => acc + Number(item.amount),
      0
    )

    const totalByCategory: Category[] = []

    categories.map(category => {
      let categorySum = 0
      expensesList.map(expensive => {
        if (expensive.category === category.key) {
          categorySum += Number(expensive.amount)
        }
      })
      if (categorySum > 0) {
        const percent = (categorySum / expensesTotal) * 100
        totalByCategory.push({
          title: category.name,
          amount: categorySum,
          amountFormatted: formatCurrency(categorySum),
          color: category.color,
          percentFormatted: `${percent.toFixed(0)}% `,
          percent,
        })
      }
    })

    setCategoriesList(totalByCategory)
    setIsLoading(false)
  }, [selectedDate, user.id])

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.Header>
          <S.Title>Resumo por categoria</S.Title>
        </S.Header>
        <S.MonthSelect>
          <C.IconButton
            icon={<S.Icon name="chevron-left" />}
            onPress={() => selectedDateChange('PREV')}
          />
          <S.MonthText>{selectedDateFormatted}</S.MonthText>
          <C.IconButton
            icon={<S.Icon name="chevron-right" />}
            onPress={() => selectedDateChange('NEXT')}
          />
        </S.MonthSelect>
        <S.ContentList
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingBottom: tabHeight,
          }}
        >
          <S.GraphContainer>
            <VictoryPie
              data={categoriesList}
              colorScale={categoriesList.map(category => category.color)}
              style={{
                labels: {
                  fontSize: RFValue(18),
                  fontWeight: 'bold',
                  fill: 'white',
                },
              }}
              labelRadius={50}
              x="percentFormatted"
              y="amount"
            />
          </S.GraphContainer>
          {categoriesList.map(category => (
            <C.HistoryCard key={category.title} data={category} />
          ))}
        </S.ContentList>
      </S.Container>
    </TouchableWithoutFeedback>
  )
}
