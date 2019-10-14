import React from "react"
import { StyledDiv } from "../styled-native/styled.div"
import { StyledNavigationHeader } from "../styled-native/styled-nav-header"
import { Logo } from "./icons/logo"
import { StyledHeader } from "../styled-native/styled-header"
import { StyledP } from "../styled-native/styled-p"
import FacebookLogin from "react-facebook-login"

const responseFacebook = (response: any) => {
  console.log(response)
}

export const FacebookLoginComp = (props: any) => {
  return (
    <StyledDiv>
      <StyledNavigationHeader center={<Logo size="60px" />} />
      <StyledHeader>Facebook Login</StyledHeader>
      <StyledP>
        Log into Facebook so we can subscribe the demographic to your account.
      </StyledP>
      <FacebookLogin
        appId="265669694079249"
        autoLoad
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </StyledDiv>
  )
}
