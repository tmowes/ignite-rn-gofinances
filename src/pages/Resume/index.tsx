/* eslint-disable array-callback-return */
import React, { useCallback, useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'

import { VictoryPie } from 'victory-native'
import { useFocusEffect } from '@react-navigation/native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { RFValue } from 'react-native-responsive-fontsize'

import * as C from '../../components'
import * as S from './styles'
import { loadTransactions } from '../../libs/storage'
import { categories, formatCurrency } from '../../utils'
import { Category } from './types'

export const Resume = () => {
  const [isLoading, setIsLoading] = useState(true)
  const tabHeight = useBottomTabBarHeight()

  const [categoriesList, setCategoriesList] = useState<Category[]>([])

  const loadAsyncStorage = async () => {
    const storageTransactions = await loadTransactions()
    const expensesList = storageTransactions.filter(
      transaction => transaction.type === 'EXPENSE'
    )

    const expensesTotal = expensesList.reduce(
      (acc, item) => acc + Number(item.amount),
      0
    )

    console.log(expensesTotal)

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
  }

  useEffect(() => {
    loadAsyncStorage()
  }, [])

  useFocusEffect(
    useCallback(() => {
      loadAsyncStorage()
    }, [])
  )

  console.log(categoriesList)

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
        <S.ContentList
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingBottom: tabHeight,
          }}
        >
          <S.MonthSelect>
            <C.IconButton icon={<S.Icon name="chevron-left" />} />
            <S.MonthText>Maio</S.MonthText>
            <C.IconButton icon={<S.Icon name="chevron-right" />} />
          </S.MonthSelect>
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
