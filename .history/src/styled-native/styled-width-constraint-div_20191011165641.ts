import styled from "styled-components"

export const StyledWidthConstraintDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60rem;
  min-width: 10rem;
  width: 100%;
  background-color: white;
  &.center {
    align-items: center;
  }
`
