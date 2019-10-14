import React from "react"
import styled from "styled-components"

const StyledNav = styled.nav`
  height: 9rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  &.bottom {
    margin-bottom: 0;
  }
  &.footer {
    padding: 0;
  }
`
const StyledNavUl = styled.ul`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto;
`
const StyledContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  & button {
    margin-bottom: 0;
  }
  &.left {
    justify-content: flex-start;
    grid-column-start: 1;
  }
  &.center {
    grid-column-start: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  &.right {
    justify-content: flex-end;
    grid-column-start: 3;
  }
`

export const StyledNavigationHeader = (props: any) => {
  return (
    <StyledNav role="navigation" className={props.class}>
      <StyledNavUl>
        <StyledContainer className="left">{props.left}</StyledContainer>
        <StyledContainer className="center">{props.center}</StyledContainer>
        <StyledContainer className="right">{props.right}</StyledContainer>
      </StyledNavUl>
    </StyledNav>
  )
}
