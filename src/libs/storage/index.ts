import AsyncStorage from '@react-native-async-storage/async-storage'

import { TransactionProps, StorageTransactionsProps } from './types'

export const storageKey = '@gofinance'

export const saveTransaction = async (transaction: TransactionProps) => {
  try {
    const data = await AsyncStorage.getItem(`${storageKey}:transactions`)
    const prevTransactions = data
      ? (JSON.parse(data) as StorageTransactionsProps)
      : {}

    const newTransaction = {
      [transaction.id]: {
        data: transaction,
      },
    }

    await AsyncStorage.setItem(
      `${storageKey}:transactions`,
      JSON.stringify({
        ...newTransaction,
        ...prevTransactions,
      })
    )
  } catch (err) {
    throw new Error(err)
  }
}

export const loadTransactions = async () => {
  try {
    const data = await AsyncStorage.getItem(`${storageKey}:transactions`)
    const transactions = data
      ? (JSON.parse(data) as StorageTransactionsProps)
      : {}

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

export const saveUserName = async (name: string) => {
  try {
    await AsyncStorage.setItem(`${storageKey}:user`, name)
  } catch (err) {
    throw new Error(err)
  }
}

export const loadUserName = async () => {
  try {
    return await AsyncStorage.getItem(`${storageKey}:user`)
  } catch (err) {
    throw new Error(err)
  }
}

export const clearStorage = async () => {
  try {
    return await AsyncStorage.removeItem(`${storageKey}:transactions`)
  } catch (err) {
    throw new Error(err)
  }
}
