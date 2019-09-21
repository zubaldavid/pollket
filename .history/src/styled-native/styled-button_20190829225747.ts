import styled from "styled-components"
import { Colors } from "../styled-app/colors"

export const StyledButton = styled.button`
  width: 100%;
  height: 4rem;
  background-color: ${Colors.green};
  border-radius: 2.6rem;
  font-size: 1.2rem;
  color: ${Colors.white};
  border: none;
  outline: none;
  &:focus {
    background-color: ${Colors.darkBlue};
  }
  animation: fade-in 1.2 ease;
`
