import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

import { StyledProps } from './types'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.whiteIsh};
    width: ${RFValue(300)}px;
    border-radius: 6px;
    padding: 16px 24px;
    margin-right: 16px;
    margin-bottom: 16px;
  `}
`
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const Title = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-size: ${RFValue(14)}px;
    color: ${colors.title};
    font-family: ${fonts.regular};
  `}
`

export const Amount = styled.Text<StyledProps>`
  ${({ theme: { colors, fonts }, type }) => css`
    font-size: ${RFValue(20)}px;
    color: ${colors.title};
    font-family: ${fonts.regular};
    margin-top: 4px;
    line-height: ${RFValue(24)}px;
    ${type === 'INCOME' &&
    css`
      color: ${colors.success};
    `}
    ${type === 'EXPENSE' &&
    css`
      color: ${colors.error};
    `}
  `}
`
export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`

export const CategoryIcon = styled(Feather)`
  ${({ theme: { colors } }) => css`
    font-size: ${RFValue(18)}px;
    color: ${colors.text};
  `}
`

export const CategoryName = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-size: ${RFValue(14)}px;
    color: ${colors.text};
    font-family: ${fonts.medium};
    margin-left: 4px;
    margin-right: auto;
  `}
`

export const TransactionDate = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-size: ${RFValue(12)}px;
    color: ${colors.text};
    font-family: ${fonts.regular};
  `}
`
