import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import * as P from '../pages'

const { Navigator, Screen } = createStackNavigator()

export const SignInRoutes = () => (
  <Navigator headerMode="none">
    <Screen name="SignIn" component={P.SignIn} />
  </Navigator>
)
