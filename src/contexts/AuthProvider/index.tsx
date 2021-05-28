/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect } from 'react'
import React, { createContext, useContext, useState } from 'react'

import * as Google from 'expo-google-app-auth'
import * as AppleAuthentication from 'expo-apple-authentication'

import { AuthContextData, AuthProviderProps, User } from './types'
import { formatName } from '../../utils'
import { androidClientIdKey, iosClientIdKey } from '../../secrets'
import { loadUser, saveUser, clearUserStorage } from '../../libs/storage'

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props
  const [user, setUser] = useState<User>({} as User)
  const [storageLoading, setStorageLoading] = useState(true)

  const signInWithGoogle = async () => {
    try {
      const credential = await Google.logInAsync({
        iosClientId: iosClientIdKey,
        androidClientId: androidClientIdKey,
        scopes: ['profile', 'email'],
      })

      if (credential.type === 'success') {
        const userLogged = {
          id: String(credential.user.id),
          email: credential.user.email!,
          name: formatName(credential.user.name!),
          photo: credential.user.photoUrl!,
        }
        await saveUser(userLogged)
        setUser(userLogged)
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  const signInWithApple = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      })
      if (credential) {
        const name = formatName(credential.fullName!.givenName!)
        const photo = `https://ui-avatars.com/api/?name=${name}+${credential.fullName!
          .familyName!}&length=2`
        const userLogged = {
          id: String(credential.user),
          email: credential.email!,
          name,
          photo,
        }
        await saveUser(userLogged)
        setUser(userLogged)
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  const signOut = async () => {
    setUser({} as User)
    await clearUserStorage()
  }

  const loadAsyncStorage = async () => {
    const storageUser = await loadUser()
    if (storageUser) {
      setUser(storageUser)
    }
    setStorageLoading(false)
  }

  useEffect(() => {
    loadAsyncStorage()
  }, [])

  const providerValues = {
    signInWithGoogle,
    signInWithApple,
    signOut,
    user,
    storageLoading,
  }

  return (
    <AuthContext.Provider value={providerValues}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}
