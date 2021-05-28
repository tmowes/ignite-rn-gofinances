import styled, { css } from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  ${({ theme: { colors } }) => css`
    width: 100%;
    height: 70%;
    background-color: ${colors.backgroundColor};
    align-items: center;
    justify-content: flex-end;
  `}
`

export const Title = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-size: ${RFValue(28)}px;
    font-family: ${fonts.medium};
    color: ${colors.shape};
    text-align: center;
    margin-top: 40px;
  `}
`

export const SignInTitle = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.regular};
    color: ${colors.shape};
    font-size: ${RFValue(16)}px;
    text-align: center;
    margin: 64px 0;
  `}
`

export const Footer = styled.View`
  ${({ theme: { colors } }) => css`
    width: 100%;
    height: 30%;
    background-color: ${colors.secondary};
  `}
`

export const FooterWrapper = styled.View`
  margin-top: ${RFPercentage(-4)}px;
  padding: 0 32px;
  justify-content: space-between;
`
