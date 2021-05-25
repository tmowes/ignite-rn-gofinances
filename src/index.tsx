import React from 'react'
import { StatusBar } from 'react-native'

import AppLoading from 'expo-app-loading'
import styled, { css, ThemeProvider } from 'styled-components/native'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'

import { Dashboard } from './pages/Dashboard'
import * as themes from './styles/themes'

const AppWrapper = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    background: ${colors.backgroundColor};
  `}
`

export const AppSrc = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={themes.dark}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AppWrapper>
        <Dashboard />
      </AppWrapper>
    </ThemeProvider>
  )
}
