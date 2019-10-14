import React from "react"
import { StyledHeader } from "../styled-native/styled-header"
import { StyledButton } from "../styled-native/styled-button"
import { StyledInput } from "../styled-native/styled-input"
import { StyledDiv } from "../styled-native/styled.div"
import { StyledNavigationHeader } from "../styled-native/styled-nav-header"
import { Logo } from "./icons/logo"
import styled from "styled-components"
import { Colors } from "../styled-app/colors"

const StyledTransaction = styled.li`
  width: 100%;
  height: 7rem;
  transition: border-bottom 0.3s ease-out;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${Colors.grey12};
  margin-bottom: 2rem;
  &:hover {
    border-bottom: 1px solid ${Colors.grey40};
  }

export const UniverseList = () => {
  return (
    <>
      <StyledDiv>
        <StyledNavigationHeader center={<Logo size="60px" />} />
        
        <StyledButton>Continue with universe</StyledButton>
      </StyledDiv>
    </>
  )
}
