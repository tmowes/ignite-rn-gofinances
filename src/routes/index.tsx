import React from 'react'

import { useAuth } from '../contexts'
import { SignInRoutes } from './signin.routes'
import { TabRoutes } from './tab.routes'

export const AppRoutes = () => {
  const { user } = useAuth()

  if (user.id) {
    return <TabRoutes />
  }

  return <SignInRoutes />
}
