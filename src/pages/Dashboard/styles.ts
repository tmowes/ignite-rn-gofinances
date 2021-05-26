import { FlatList } from 'react-native'

import styled, { css } from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper'

import { Transaction } from './types'

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    background-color: ${colors.backgroundColor};
  `}
`
export const Header = styled.View`
  ${({ theme: { colors } }) => css`
    width: 100%;
    height: ${RFPercentage(38)}px;
    background-color: ${colors.shape};
  `}
`
export const UserContainer = styled.View`
  width: 100%;
  padding: 0 16px;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
`
export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`
export const Avatar = styled.Image`
  width: ${RFValue(56)}px;
  height: ${RFValue(56)}px;
  border-radius: 10px;
`
export const Greetings = styled.View`
  margin-left: 10px;
`
export const UserName = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-size: ${RFValue(18)}px;
    color: ${colors.whiteIsh};
    font-family: ${fonts.bold};
  `}
`
export const PowerIcon = styled(Feather).attrs({
  name: 'power',
})`
  ${({ theme: { colors } }) => css`
    color: ${colors.secondary};
    font-size: ${RFValue(24)}px;
  `}
`

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(18)}px;
`

export const Transactions = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: ${RFPercentage(4)}px;
`

export const Title = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-size: ${RFValue(18)}px;
    color: ${colors.whiteIsh};
    font-family: ${fonts.regular};
  `}
`

export const TransactionsList = styled(
  FlatList as new () => FlatList<Transaction>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 4,
  },
})``
