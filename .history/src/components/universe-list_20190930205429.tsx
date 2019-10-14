import React from "react"
import { StyledNavigationHeader } from "../styled-native/styled-nav-header"
import { Logo } from "./icons/logo"
import styled from "styled-components"
import { Colors } from "../styled-app/colors"
import { StyledButton } from "../styled-native/styled-button"
import { StyledHeader } from "../styled-native/styled-header"
import { StyledP } from "../styled-native/styled-p"
import { StyledWidthConstraintDiv } from "../styled-native/styled-width-constraint-div"
import { StyledAnimation } from "../styled-native/styled-animation"
import { StyledLabel } from "../styled-native/styled-label"

const universeData = [
  {
    id: "1",
    name: "White 30 Year Old",
    date: "11/12/2016"
  },
  {
    id: "2",
    name: "Black males in Sacramento",
    date: "11/30/2016"
  },
  {
    id: "3",
    name: "Hispanics 29-30 yrs of age in Fresno",
    date: "02/30/2017"
  }
]

const StyledUniverses = styled.ul`
  border-top: 1px solid ${Colors.grey12};
  padding: 1.5rem 0 0 0;
  width: 100%;
`

const StyledUniverse = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  transition: border-bottom 0.3s ease-out;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${Colors.grey12};
  margin-bottom: 2rem;
  &:hover {
    border-bottom: 1px solid ${Colors.grey40};
  }
  p {
    margin: 0;
  }
`
export const UniverseList = () => {
  return (
    <StyledAnimation>
      <StyledNavigationHeader center={<Logo size="60px" />} />
      <StyledWidthConstraintDiv>
        <StyledHeader>Universe Selection</StyledHeader>
        <StyledP>Choose one demographic that you would like to target </StyledP>
        <StyledUniverses>
          {universeData.map((data, idx) => {
            return (
              <StyledUniverse key={idx}>
                <StyledLabel> {data.name}</StyledLabel>
                <StyledP> {data.date}</StyledP>
              </StyledUniverse>
            )
          })}
        </StyledUniverses>
        <StyledButton>Continue with universe</StyledButton>
      </StyledWidthConstraintDiv>
    </StyledAnimation>
  )
}
