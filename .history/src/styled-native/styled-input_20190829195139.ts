import styled from "styled-components"
import { Colors } from "../styled-app/colors"

export const StyledInput = styled.input`
  width: 100%;
  height: 4.8rem;
  margin-bottom: 2rem;
  background-color: ${Colors.white};
  color: ${Colors.white};
  border: none;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.3);

  &:focus {
    border: 1px solid ${Colors.darkBlue};
  }
`
