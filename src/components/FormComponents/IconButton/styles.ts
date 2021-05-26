import { BorderlessButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

export const Container = styled(BorderlessButton)`
  ${({ theme: { colors, fonts } }) => css`
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
`}
`

export const Icon = styled(Feather)`
  ${({ theme: { colors } }) => css`
    font-size: ${RFValue(24)}px;
    color: ${colors.title};
    margin-right: 12px;
  `}
`
