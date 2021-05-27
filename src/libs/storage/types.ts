import { TransactionType } from '../../pages/Register/types'

export type UserProps = {
  name: string
}

export type AppointmentsProps = {
  title: string
  about: string
  location: string
  appointment_date: string
  appointment_hour: string
  dateTimeNotification: Date
  full_day: boolean
  created_at: string
  updated_at: string
}

export type TransactionProps = {
  id: string
  title: string
  amount: string
  type: TransactionType
  category: string
  created_at: string
  updated_at: string
}

export type StorageTransactionsProps = {
  [id: string]: {
    data: TransactionProps
  }
}
