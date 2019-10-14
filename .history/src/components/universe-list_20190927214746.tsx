import React from "react"
import { StyledNavigationHeader } from "../styled-native/styled-nav-header"
import { Logo } from "./icons/logo"
import styled from "styled-components"
import { Colors } from "../styled-app/colors"
import { StyledDiv } from "../styled-native/styled.div"
import { StyledButton } from "../styled-native/styled-button"
import { StyledHeader } from "../styled-native/styled-header"
import { StyledP } from "../styled-native/styled-p"

const universeData = [
  {
    name: "White 30 year old",
    date: "11/12/2016"
  },
  {
    name: "Black Sacramento",
    date: "11/30/2016"
  },
  {
    name: "Histpanics 29-30 yrs of age in Fresno",
    date: "02/30/2017"
  }
]

const StyledTransaction = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
        <StyledHeader>Universe Selection</StyledHeader>
        <StyledP>Choose one demographic that you would like to target </StyledP>
        <StyledTransaction />
        <StyledButton>Continue with universe</StyledButton>
      </StyledDiv>
    </>
  )
}
