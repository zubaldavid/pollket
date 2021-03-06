import React from "react"
import { StyledDiv } from "../styled-native/styled.div"
import { StyledInput } from "../styled-native/styled-input"
import { StyledButton } from "../styled-native/styled-button"
import { StyledHeader } from "../styled-native/styled-header"
import { StyledP } from "../styled-native/styled-p"
import { StyledNavigationHeader } from "../styled-native/styled-nav-header"
import { Logo } from "./icons/logo"
import { useDispatch } from "react-redux"
import { push } from "connected-react-router"

export const LoginForm = () => {
  const dispatch = useDispatch()
  const login = () => {
    dispatch(push("/campaign"))
    console.log("Moving")
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
