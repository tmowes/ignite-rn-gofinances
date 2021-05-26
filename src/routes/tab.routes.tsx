import React from 'react'
import { Platform } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components'
import { MaterialIcons } from '@expo/vector-icons'

import * as P from '../pages'

const { Navigator, Screen } = createBottomTabNavigator()

export const TabRoutes = () => {
  const { colors } = useTheme()
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: colors.secondary,
        inactiveTintColor: colors.text,
        labelPosition: 'beside-icon',
        style: {
          paddingBottom: Platform.OS === 'ios' ? 20 : 0,
          height: 64,
        },
      }}
    >
      <Screen
        name="Listagem"
        component={P.Dashboard}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Cadastrar"
        component={P.Register}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="attach-money" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Resumo"
        component={P.Dashboard}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="pie-chart-outlined"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Navigator>
  )
}
