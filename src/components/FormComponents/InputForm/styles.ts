import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
`
export const Error = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-size: ${RFValue(12)}px;
    color: ${colors.error};
    font-family: ${fonts.regular};
    margin: 6px;
  `}
`
