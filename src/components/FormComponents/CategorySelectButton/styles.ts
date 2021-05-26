import { RectButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    border: 2px solid ${colors.title}
    border-radius: 6px;
    margin-bottom: 8px;
    width: 100%;
`}
`
export const Button = styled(RectButton)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  padding: 16px;
`

export const Title = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-size: ${RFValue(16)}px;
    color: ${colors.whiteIsh};
    font-family: ${fonts.regular};
  `}
`

export const Icon = styled(Feather)`
  ${({ theme: { colors } }) => css`
    font-size: ${RFValue(24)}px;
    color: ${colors.title};
    margin-right: 12px;
  `}
`
