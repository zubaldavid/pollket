import styled from "styled-components"

export const StyledAnimation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  &.fade-in {
    animation: fade-in 0.6s ease;

    @keyframes fade-in {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`
