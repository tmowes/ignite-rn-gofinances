import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
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

export const ContentList = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  flex: 1;
`
export const GraphContainer = styled.View`
  width: 100%;
  align-items: center;
`
