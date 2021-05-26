import { TouchableOpacity } from 'react-native'

import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

export const Container = styled(TouchableOpacity)`
  ${({ theme: { colors, fonts } }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: ${colors.title};
    border: 2px solid ${colors.title}
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

export const Icon = styled(Feather)`
  ${({ theme: { colors } }) => css`
    font-size: ${RFValue(24)}px;
    color: ${colors.title};
    margin-right: 12px;
  `}
`
