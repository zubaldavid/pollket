import styled from "styled-components"

export const StyledWidthConstraintDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${Theme.layout.mobile.large};
  max-width: 60rem;
  min-width: 10rem;
  width: 100%;
  background-color: white;
  &.center {
    align-items: center;
  }
`
