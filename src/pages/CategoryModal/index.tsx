import React from 'react'
import { FlatList } from 'react-native'

import * as C from '../../components'
import { categories } from '../../utils'
import * as S from './styles'
import { CategoryModalProps } from './types'

export const CategoryModal = (props: CategoryModalProps) => {
  const { category, setCategory, closeSelectedCategory } = props

  return (
    <S.Container>
      <S.Header>
        <S.Title>Categoria</S.Title>
      </S.Header>
      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={item => item.key}
        ItemSeparatorComponent={() => <S.Separator />}
        renderItem={({ item }) => (
          <S.CategoryItem
            onPress={() => setCategory(item)}
            isActive={category.key === item.key}
          >
            <S.Icon name={item.icon} />
            <S.Name> {item.name}</S.Name>
          </S.CategoryItem>
        )}
      />

      <S.Footer>
        <C.Button label="Selecionar" onPress={closeSelectedCategory} />
      </S.Footer>
    </S.Container>
  )
}
