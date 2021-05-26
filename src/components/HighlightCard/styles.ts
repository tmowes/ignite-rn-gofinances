import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

import { StyledProps } from './types'

export const Container = styled.View<StyledProps>`
  ${({ theme: { colors }, type }) => css`
    background-color: ${colors.whiteIsh};
    width: ${RFValue(300)}px;
    border-radius: 6px;
    padding: 16px 24px ${RFValue(32)}px;
    margin-right: 16px;
    ${type === 'TOTAL' &&
    css`
      background-color: ${colors.secondary};
    `}
  `}
`
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const Title = styled.Text<StyledProps>`
  ${({ theme: { colors, fonts }, type }) => css`
    font-size: ${RFValue(16)}px;
    color: ${colors.title};
    font-family: ${fonts.regular};
    ${type === 'TOTAL' &&
    css`
      color: ${colors.whiteIsh};
    `}
  `}
`
// eslint-disable-next-line prettier/prettier
export const ArrowIcon = styled(Feather) <StyledProps>`
  ${({ theme: { colors }, type }) => css`
    font-size: ${RFValue(24)}px;
    color: ${colors.title};
    ${type === 'INCOME' &&
    css`
      color: ${colors.success};
    `}
    ${type === 'EXPENSE' &&
    css`
      color: ${colors.error};
    `}
    ${type === 'TOTAL' &&
    css`
      color: ${colors.whiteIsh};
    `}
  `}
`
export const Content = styled.View``

export const Amount = styled.Text<StyledProps>`
  ${({ theme: { colors, fonts }, type }) => css`
    font-size: ${RFValue(28)}px;
    color: ${colors.title};
    font-family: ${fonts.medium};
    margin-top: 32px;
    line-height: ${RFValue(32)}px;
    ${type === 'TOTAL' &&
    css`
      color: ${colors.whiteIsh};
    `}
  `}
`
export const LastTransaction = styled.Text<StyledProps>`
  ${({ theme: { colors, fonts }, type }) => css`
    font-size: ${RFValue(12)}px;
    color: ${colors.text};
    font-family: ${fonts.regular};
    ${type === 'TOTAL' &&
    css`
      color: ${`${colors.whiteIsh}b3`};
    `}
  `}
`
