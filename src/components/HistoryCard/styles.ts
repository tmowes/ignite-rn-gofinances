import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

import { StyledProps } from './types'

export const Container = styled.View<StyledProps>`
  ${({ theme: { colors }, color }) => css`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.whiteIsh};
    border-left-width: 8px;
    border-color: ${color};
    border-radius: 6px;
    padding: 16px 24px;
    margin-bottom: 8px;
  `}
`

export const Title = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-size: ${RFValue(15)}px;
    color: ${colors.title};
    font-family: ${fonts.regular};
  `}
`
export const Amount = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-size: ${RFValue(18)}px;
    color: ${colors.title};
    font-family: ${fonts.bold};
  `}
`
