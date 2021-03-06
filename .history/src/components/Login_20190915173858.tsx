import React from "react"
import { StyledDiv } from "../styled-native/styled.div"
import { StyledInput } from "../styled-native/styled-input"
import { StyledButton } from "../styled-native/styled-button"
import { StyledHeader } from "../styled-native/styled-header"
import { StyledP } from "../styled-native/styled-p"
import { StyledNavigationHeader } from "../styled-native/styled-nav-header"
import { Logo } from "./icons/logo"
import history from 'history'

export const LoginForm = () => {
  const login = () => {
    history.
  }
  return (
    <StyledDiv>
      <StyledNavigationHeader center={<Logo />} />
      <StyledHeader>Sign in</StyledHeader>
      <StyledP>Sign in using your PDI credentials </StyledP>
      <StyledInput placeholder="Email" />
      <StyledInput placeholder="Password" />
      <StyledButton onClick={login}>Log In</StyledButton>
    </StyledDiv>
  )
}
