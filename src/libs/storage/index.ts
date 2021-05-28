import AsyncStorage from '@react-native-async-storage/async-storage'

import { User } from '../../contexts/AuthProvider/types'
import { TransactionProps, StorageTransactionsProps } from './types'

export const storageKey = '@gofinance'

export const saveTransaction = async (transaction: TransactionProps, userId: string) => {
  try {
    const data = await AsyncStorage.getItem(`${storageKey}:transactions_user:${userId}`)
    const prevTransactions = data ? (JSON.parse(data) as StorageTransactionsProps) : {}
    const newTransaction = {
      [transaction.id]: {
        data: transaction,
      },
    }

    await AsyncStorage.setItem(
      `${storageKey}:transactions_user:${userId}`,
      JSON.stringify({
        ...newTransaction,
        ...prevTransactions,
      })
    )
  } catch (err) {
    throw new Error(err)
  }
}

export const loadTransactions = async (userId: string) => {
  try {
    const data = await AsyncStorage.getItem(`${storageKey}:transactions_user:${userId}`)

    const transactions = data ? (JSON.parse(data) as StorageTransactionsProps) : {}

    return Object.keys(transactions)
      .map(device => ({
        ...transactions[device].data,
      }))
      .sort(
        (a, b) =>
          Math.floor(new Date(a.created_at).getTime()) -
          Math.floor(new Date(b.created_at).getTime())
      )
  } catch (err) {
    throw new Error(err)
  }
}

export const clearTransactionsStorage = async (userId: string) => {
  try {
    return await AsyncStorage.removeItem(`${storageKey}:transactions_user:${userId}`)
  } catch (err) {
    throw new Error(err)
  }
}

export const saveUser = async (user: User) => {
  try {
    await AsyncStorage.setItem(`${storageKey}:user`, JSON.stringify(user))
  } catch (err) {
    throw new Error(err)
  }
}

export const loadUser = async () => {
  try {
    const data = await AsyncStorage.getItem(`${storageKey}:user`)
    return data ? (JSON.parse(data) as User) : ({} as User)
  } catch (err) {
    throw new Error(err)
  }
}

export const clearUserStorage = async () => {
  try {
    return await AsyncStorage.removeItem(`${storageKey}:user`)
  } catch (err) {
    throw new Error(err)
  }
}
