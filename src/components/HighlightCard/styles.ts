import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.whiteIsh};
    width: ${RFValue(300)}px;
    border-radius: 6px;
    padding: 16px 24px ${RFValue(32)}px;
    margin-right: 16px;
  `}
`
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const Title = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-size: ${RFValue(16)}px;
    color: ${colors.title};
    font-family: ${fonts.regular};
  `}
`
export const ArrowIcon = styled(Feather)`
  ${({ theme: { colors } }) => css`
    font-size: ${RFValue(24)}px;
    color: ${colors.title};
  `}
`
export const Content = styled.View``
export const Amount = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-size: ${RFValue(28)}px;
    color: ${colors.title};
    font-family: ${fonts.medium};
    margin-top: 32px;
    line-height: ${RFValue(32)}px;
  `}
`
export const LastTransaction = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-size: ${RFValue(12)}px;
    color: ${colors.text};
    font-family: ${fonts.regular};
  `}
`
