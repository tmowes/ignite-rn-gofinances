import React, { useState } from 'react'
import { ActivityIndicator, Alert, Platform } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

import AppleSvg from '../../assets/apple_icon.svg'
import GoogleSvg from '../../assets/google_icon.svg'
import LogoSvg from '../../assets/gofinances_icon.svg'
import * as C from '../../components'
import * as S from './styles'
import { useAuth } from '../../contexts'

export const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { user, signInWithGoogle, signInWithApple } = useAuth()
  const { colors } = useTheme()

  const signInGoogle = async () => {
    try {
      setIsLoading(true)
      return await signInWithGoogle()
    } catch (error) {
      Alert.alert('Não foi possivel fazer o login')
      console.log(error)
      setIsLoading(false)
    }
  }

  const signInApple = async () => {
    try {
      setIsLoading(true)
      return await signInWithApple()
    } catch (error) {
      Alert.alert('Não foi possivel fazer o login')
      console.log(error)
      setIsLoading(false)
    }
  }

  return (
    <S.Container>
      <S.Header>
        <LogoSvg width={RFValue(120)} height={RFValue(68)} />
        <S.Title>
          Controle suas {'\n'}
          finanças de forma {'\n'}
          muito simples {'\n'}
        </S.Title>
        <S.SignInTitle>
          Faça seu login com {'\n'}
          uma das contas abaixo
        </S.SignInTitle>
      </S.Header>
      <S.Footer>
        <S.FooterWrapper>
          <C.SignInSocialButton
            label="Entrar com Google"
            onPress={signInGoogle}
            svg={GoogleSvg}
          />
          {Platform.OS === 'ios' && (
            <C.SignInSocialButton
              label={`Entrar com Apple, ${user.name}`}
              onPress={signInApple}
              svg={AppleSvg}
            />
          )}
        </S.FooterWrapper>
        {isLoading && (
          <ActivityIndicator
            color={colors.shape}
            style={{
              marginTop: 18,
            }}
          />
        )}
      </S.Footer>
    </S.Container>
  )
}
