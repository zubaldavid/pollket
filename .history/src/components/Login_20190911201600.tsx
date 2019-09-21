import React from "react"
import { StyledDiv } from "../styled-native/styled.div"
import { StyledInput } from "../styled-native/styled-input"
import { StyledButton } from "../styled-native/styled-button"
import { StyledHeader } from "../styled-native/styled-header"
import { StyledP } from "../styled-native/styled-p"
import { StyledNavigationHeader } from "../styled-native/styled-nav-header"
import { Logo } from "./icons/logo"
import styled from "styled-components"

const StyledMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`

export const LoginForm = () => {
  return (
    <StyledDiv>
      <StyledNavigationHeader center={<Logo />} />
      <StyledHeader>Sign in</StyledHeader>
      <StyledP>Sign in using your PDI credentials </StyledP>
      <StyledInput placeholder="Email" />
      <StyledInput placeholder="Password" />
      <StyledButton>Log In</StyledButton>
    </StyledDiv>
  )
}
