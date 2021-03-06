import React from "react"
import { StyledDiv } from "../styled-native/styled.div"
import { StyledNavigationHeader } from "../styled-native/styled-nav-header"
import { Logo } from "./icons/logo"
import { StyledHeader } from "../styled-native/styled-header"
import { StyledP } from "../styled-native/styled-p"

export const FacebookLogin = () => {
  return (
    <StyledDiv>
      <StyledNavigationHeader center={<Logo size="60px" />} />
      <StyledHeader>Facebook Login</StyledHeader>
      <StyledP>
        Log into Facebook so we can subscribe the demographic to your account.
      </StyledP<FacebookLogin
  appId="1088597931155576"
  autoLoad
  callback={responseFacebook}
  render={renderProps => (
    <button onClick={renderProps.onClick}>This is my custom FB button</button>
  )}
/>>

    </StyledDiv>
  )
}
