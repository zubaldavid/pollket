export const StyledWidthConstraintDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${Theme.layout.mobile.large};
  max-width: ${Theme.sizes.mobile.xmax};
  min-width: 10rem;
  width: 100%;
  background-color: white;
  &.center {
    align-items: center;
  }
`
