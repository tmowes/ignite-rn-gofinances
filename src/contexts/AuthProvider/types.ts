import { ReactNode } from 'react'

export type AuthProviderProps = {
  children: ReactNode
}

export type AuthContextData = {
  user: User
  signInWithGoogle: () => Promise<void>
  signInWithApple: () => Promise<void>
  signOut: () => Promise<void>
  storageLoading: boolean
}

export type User = {
  id: string
  name: string
  email: string
  photo?: string
}
