import { TouchableOpacity } from 'react-native'

import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled(TouchableOpacity)`
  ${({ theme: { colors, fonts } }) => css`
    background-color: ${colors.secondary};
    align-items: center;
    justify-content: center;
    color: ${colors.title};
    border-radius: 6px;
    font-size: ${RFValue(16)}px;
    padding: 16px;
    width: 100%;
    margin-bottom: 8px;
    font-family: ${fonts.medium};
  `}
`
export const Title = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-size: ${RFValue(16)}px;
    color: ${colors.whiteIsh};
    font-family: ${fonts.regular};
  `}
`
