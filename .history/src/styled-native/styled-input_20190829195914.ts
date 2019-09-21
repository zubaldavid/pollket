import styled from "styled-components"
import { Colors } from "../styled-app/colors"

export const StyledInput = styled.input`
  width: 100%;
  height: 4.8rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: ${Colors.white};
  color: ${Colors.lightGray};
  border: none;
  outline: none;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 0.5rem;

  color: ${props => props.inputColor || "palevioletred"};

  &:focus {
    border: 1px solid ${Colors.darkBlue};
  }
`
