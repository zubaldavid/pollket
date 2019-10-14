import React from "react"
import { StyledDiv } from "../styled-native/styled.div"
import { StyledInput } from "../styled-native/styled-input"
import { StyledButton } from "../styled-native/styled-button"
import { StyledHeader } from "../styled-native/styled-header"
import { StyledP } from "../styled-native/styled-p"
import { StyledNavigationHeader } from "../styled-native/styled-nav-header"
import { Logo } from "./icons/logo"
import { useDispatch } from "react-redux"
import { navigate } from "../ui-actions"

export const LoginForm = () => {
  const dispatch = useDispatch()
  const login = () => {
    dispatch(navigate("/campaign"))
    console.log("Moving")
  }

  return (
    <StyledDiv>
      <StyledNavigationHeader center={<Logo size="60px" />} />
      <StyledHeader>Sign in</StyledHeader>
      <StyledP>Sign in using your PDI credentials </StyledP>
      <StyledInput placeholder="Email" />
      <StyledInput placeholder="Password" />
      <StyledButton onClick={login}>Log In</StyledButton>
    </StyledDiv>
  )
}
