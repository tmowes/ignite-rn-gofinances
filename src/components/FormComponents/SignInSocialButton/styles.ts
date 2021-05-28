import styled, { css } from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled(RectButton)`
  ${({ theme: { colors } }) => css`
    height: ${RFValue(56)}px;
    background-color: ${colors.whiteIsh};
    border-radius: 6px;
    align-items: center;
    flex-direction: row;
    margin-bottom: 16px;
  `}
`
export const ImageContainer = styled.View`
  ${({ theme: { colors } }) => css`
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: ${RFValue(16)}px;
    border-color: ${colors.text};
    border-right-width: 1px;
  `}
`
export const Title = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    flex: 1;
    text-align: center;
    font-family: ${fonts.medium};
    color: ${colors.title};
    font-size: ${RFValue(14)}px;
  `}
`
