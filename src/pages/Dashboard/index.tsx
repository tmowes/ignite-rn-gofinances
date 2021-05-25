import React from 'react'

import * as C from '../../components'
import * as S from './styles'

export const Dashboard = () => (
  <S.Container>
    <S.Header>
      <S.UserContainer>
        <S.UserInfo>
          <S.Avatar source={{ uri: 'http://github.com/tmowes.png' }} />
          <S.Greetings>
            <S.UserGreeting>Olá,</S.UserGreeting>
            <S.UserName>Julius</S.UserName>
          </S.Greetings>
          <S.PowerIcon />
        </S.UserInfo>
      </S.UserContainer>
    </S.Header>
    <S.HighlightCards>
      <C.HighlightCard />
      <C.HighlightCard />
      <C.HighlightCard />
    </S.HighlightCards>
  </S.Container>
)
