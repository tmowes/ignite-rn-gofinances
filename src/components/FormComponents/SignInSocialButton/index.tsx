import React from 'react'

import * as S from './styles'
import { SignInSocialButtonProps } from './types'

export const SignInSocialButton = (props: SignInSocialButtonProps) => {
  const { label, svg: Svg, ...attrs } = props
  return (
    <S.Container {...attrs}>
      <S.ImageContainer>
        <Svg />
      </S.ImageContainer>
      <S.Title>{label}</S.Title>
    </S.Container>
  )
}
