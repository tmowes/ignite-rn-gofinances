/* eslint-disable prettier/prettier */
import { TouchableOpacity } from 'react-native'

import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

import { ActiveStyledProps, StyledProps } from './types'

export const Container = styled(TouchableOpacity) <ActiveStyledProps>`
  ${({ theme: { colors, fonts }, type, isActive }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${colors.title};
    border: 2px solid ${colors.title}
    border-radius: 6px;
    font-size: ${RFValue(16)}px;
    padding: 16px;
    width: 48%;
    margin-bottom: 8px;
    font-family: ${fonts.medium};
    ${isActive &&
    type === 'INCOME' &&
    css`
        background-color: ${colors.successAlpha};
        border: 2px solid ${colors.successAlpha};
      `
    }
    ${isActive &&
    type === 'EXPENSE' &&
    css`
        background-color: ${colors.errorAlpha};
        border: 2px solid ${colors.errorAlpha};
      `
    }

`}
`
export const Title = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-size: ${RFValue(16)}px;
    color: ${colors.whiteIsh};
    font-family: ${fonts.regular};
  `}
`

export const Icon = styled(Feather) <StyledProps>`
  ${({ theme: { colors }, type }) => css`
    font-size: ${RFValue(24)}px;
    color: ${colors.title};
    margin-right: 12px;
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
