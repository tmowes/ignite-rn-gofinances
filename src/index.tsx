import React from 'react'
import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import AppLoading from 'expo-app-loading'
import styled, { css, ThemeProvider } from 'styled-components/native'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'

import * as themes from './styles/themes'
import { AppProvider, useAuth } from './contexts'
import { AppRoutes } from './routes'

const AppWrapper = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    background: ${colors.backgroundColor};
  `}
`

export const AppSrc = () => {
  const { storageLoading } = useAuth()

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })

  if (!fontsLoaded || storageLoading) {
    return <AppLoading />
  }

  return (
    <AppProvider>
      <ThemeProvider theme={themes.dark}>
        <NavigationContainer>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          <AppWrapper>
            <AppRoutes />
          </AppWrapper>
        </NavigationContainer>
      </ThemeProvider>
    </AppProvider>
  )
}
