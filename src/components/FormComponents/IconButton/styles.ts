import { BorderlessButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

export const Container = styled(BorderlessButton)`
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 16px;
`

export const Icon = styled(Feather)`
  ${({ theme: { colors } }) => css`
    font-size: ${RFValue(24)}px;
    color: ${colors.title};
    margin-right: 12px;
  `}
`
