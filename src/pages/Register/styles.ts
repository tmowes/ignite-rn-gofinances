import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
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

export const Form = styled.View`
  flex: 1;
  padding: 24px;
  justify-content: space-between;
`

export const Fields = styled.View``
export const TransactionTypes = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const PowerIcon = styled(Feather).attrs({
  name: 'power',
})`
  ${({ theme: { colors } }) => css`
    color: ${colors.secondary};
    font-size: ${RFValue(24)}px;
    margin-left: auto;
  `}
`
