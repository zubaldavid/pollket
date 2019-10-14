import styled from "styled-components"
import { Colors } from "../styled-app/colors"
import { Fonts } from "../styled-app/fonts"

export const StyledLabel = styled.label`
  width: 100%;
  margin-bottom: 1rem;
  font-size: 1.6rem;
  line-height: 2rem;
  background-color: ${Colors.white};
  color: ${Colors.dark};
  font-weight: bold;
  &.error {
    color: ${Colors.red};
    font-size: ${Fonts.small.size};
    margin-bottom: 1rem;
  }
`
