/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { GestureHandlerRootView, RectButton } from 'react-native-gesture-handler'

import { StyledProps } from './types'

export const Container = styled(GestureHandlerRootView)`
  ${({ theme: { colors } }) => css`
    flex: 1;
    background-color: ${colors.backgroundColor};
  `}
`
export const Header = styled.View`
  ${({ theme: { colors } }) => css`
    width: 100%;
    height: ${RFValue(88)}px;
    background-color: ${colors.shape};
    padding-top: ${getStatusBarHeight() + RFValue(24)}px;
    align-items: center;
  `}
`

export const Title = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-size: ${RFValue(18)}px;
    color: ${colors.whiteIsh};
    font-family: ${fonts.regular};
  `}
`
export const CategoryItem = styled(RectButton) <StyledProps>`
  ${({ theme: { colors }, isActive }) => css`
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: ${RFValue(14)}px;
    ${isActive &&
    css`
      background-color: ${colors.secondaryAlpha};
    `}
  `}
`

export const Icon = styled(Feather)`
  ${({ theme: { colors } }) => css`
    font-size: ${RFValue(14)}px;
    color: ${colors.whiteIsh};
    margin-right: 16px;
  `}
`

export const Name = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-size: ${RFValue(14)}px;
    color: ${colors.whiteIsh};
    font-family: ${fonts.regular};
  `}
`

export const Separator = styled.View`
  ${({ theme: { colors } }) => css`
    height: 1px;
    background-color: ${colors.title};
    width: 100%;
  `}
`

export const Footer = styled.View`
  padding: 24px;
`
