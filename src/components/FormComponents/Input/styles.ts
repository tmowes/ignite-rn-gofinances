import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.TextInput`
  ${({ theme: { colors, fonts } }) => css`
    background-color: ${colors.whiteIsh};
    color: ${colors.title};
    border-radius: 6px;
    font-size: ${RFValue(14)}px;
    padding: 16px;
    width: 100%;
    margin-bottom: 8px;
    font-family: ${fonts.regular};
  `}
`
