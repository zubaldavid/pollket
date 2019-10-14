import React from "react"
import { StyledHeader } from "../styled-native/styled-header"
import { StyledButton } from "../styled-native/styled-button"
import { StyledInput } from "../styled-native/styled-input"
import { StyledDiv } from "../styled-native/styled.div"
import { StyledNavigationHeader } from "../styled-native/styled-nav-header"

export const UniverseList = () => {
  return (
    <>
      <StyledDiv>
        <StyledNavigationHeader></StyledNavigationHeader>
        <StyledHeader></StyledHeader>
        <StyledButton>Continue with universe</StyledButton>
      </StyledDiv>
    </>
  )
}
