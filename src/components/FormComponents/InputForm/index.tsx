import React from 'react'

import { Controller } from 'react-hook-form'

import { Input } from '../Input'
import * as S from './styles'
import { InputFormProps } from './types'

export const InputForm = (props: InputFormProps) => {
  const { control, name, error, ...attrs } = props
  return (
    <S.Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={t => onChange(t)} value={value} {...attrs} />
        )}
        name={name}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  )
}
