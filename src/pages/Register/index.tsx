import React, { useState } from 'react'
import { Keyboard, TouchableWithoutFeedback, Modal, Alert } from 'react-native'

import uuid from 'react-native-uuid'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigation } from '@react-navigation/native'

import * as C from '../../components'
import { CategoryModal } from '../CategoryModal'
import * as S from './styles'
import { FormDTO, TransactionType } from './types'
import { formSchema } from './formSchema'
import { saveTransaction } from '../../libs/storage'
import { TransactionProps } from '../../libs/storage/types'
import { initialCategory, initialTransactionType } from './initialFormState'
import { useAuth } from '../../contexts'

export const Register = () => {
  const { navigate } = useNavigation()
  const { user } = useAuth()
  const {
    control,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(formSchema),
  })
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState(initialCategory)
  const [transactionType, setTransactionType] = useState<TransactionType>(
    initialTransactionType
  )

  const transactionTypeSelection = (selectType: TransactionType) => {
    setTransactionType(selectType)
  }

  const handleRegister = async (form: FormDTO) => {
    if (category.key === 'category') {
      return Alert.alert('Selecione a categoria!')
    }

    const data: TransactionProps = {
      id: String(uuid.v4()),
      title: form.name,
      amount: form.amount,
      type: transactionType,
      category: category.key,
      created_at: String(new Date()),
      updated_at: String(new Date()),
    }
    try {
      await saveTransaction({ ...data }, user.id)
      setCategory(initialCategory)
      setTransactionType(initialTransactionType)
      reset()
      navigate('Listagem')
    } catch (error) {
      console.log(error)
      return Alert.alert('Não foi possivel cadastrar a transação!')
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.Header>
          <S.Title>Cadastro</S.Title>
        </S.Header>
        <S.Form>
          <S.Fields>
            <C.InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <C.InputForm
              placeholder="Preço"
              name="amount"
              control={control}
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
            />
            <S.TransactionTypes>
              <C.TransactionTypeButton
                type="INCOME"
                label="Entrada"
                onPress={() => transactionTypeSelection('INCOME')}
                isActive={transactionType === 'INCOME'}
              />
              <C.TransactionTypeButton
                type="EXPENSE"
                label="Saída"
                onPress={() => transactionTypeSelection('EXPENSE')}
                isActive={transactionType === 'EXPENSE'}
              />
            </S.TransactionTypes>
            <C.CategorySelectButton
              label={category.name}
              onPress={() => setCategoryModalOpen(true)}
            />
          </S.Fields>
          <C.Button label="Enviar" onPress={handleSubmit(handleRegister)} />
        </S.Form>
        <Modal visible={categoryModalOpen}>
          <CategoryModal
            category={category}
            setCategory={setCategory}
            closeSelectedCategory={() => setCategoryModalOpen(false)}
          />
        </Modal>
      </S.Container>
    </TouchableWithoutFeedback>
  )
}
