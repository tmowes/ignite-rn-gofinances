import React, { useState } from 'react'
import { Keyboard, TouchableWithoutFeedback, Modal, Alert } from 'react-native'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import * as C from '../../components'
import { CategoryModal } from '../CategoryModal'
import * as S from './styles'
import { FormDTO, TransactionType } from './types'
import { formSchema } from './formSchema'

export const Register = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(formSchema),
  })
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  })
  const [transactionType, setTransactionType] = useState<TransactionType>(
    'INCOME'
  )

  const transactionTypeSelection = (selectType: TransactionType) => {
    setTransactionType(selectType)
  }

  // eslint-disable-next-line consistent-return
  const handleRegister = (form: FormDTO) => {
    if (category.key === 'category') {
      return Alert.alert('Selecione a categoria!')
    }

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    }
    console.log(data)
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
