import styled from "styled-components"
import { Colors } from "../styled-app/colors"

export const StyledButton = styled.button`
  width: 100%;
  height: 4rem;
  display: block;
  background-color: ${Colors.green};
  border-radius: 2.6rem;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: ${Colors.white};
  border: none;
  outline: none;
  transition: background-color 0.3s ease-out;
  &:focus {
    background-color: ${Colors.darkGreen};
  }
`
