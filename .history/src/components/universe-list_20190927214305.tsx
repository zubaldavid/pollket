import React from "react"
import { StyledNavigationHeader } from "../styled-native/styled-nav-header"
import { Logo } from "./icons/logo"
import styled from "styled-components"
import { Colors } from "../styled-app/colors"
import { StyledDiv } from "../styled-native/styled.div"
import { StyledButton } from "../styled-native/styled-button"

const universeData = [
  {
    name: "White 30 year old",
    date: "11/12/2016"
  },
  {
    name: "White 30 year old",
    date: "11/12/2016"
  }
]

const StyledTransaction = styled.li`
  width: 100%;
  height: 5rem;
  transition: border 0.3s ease-out;
  display: flex;
  flex-direction: row;
  border: 1px solid ${Colors.grey12};
  margin-bottom: 2rem;
  &:hover {
    border: 1px solid ${Colors.grey40};
  }
`
export const UniverseList = () => {
  return (
    <>
      <StyledDiv>
        <StyledNavigationHeader center={<Logo size="60px" />} />
        <StyledTransaction />
        <StyledButton>Continue with universe</StyledButton>
      </StyledDiv>
    </>
  )
}
