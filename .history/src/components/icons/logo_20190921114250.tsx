import React from "react"
import styled from "styled-components"

const StyledMargin = styled.div`
  margin-bottom: 2rem;
`
export const Logo = (props: { size: string }) => {
  return (
    <StyledMargin>
      <svg
        width={props.size}
        viewBox="0 0 104 103"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g id="Page-1">
          <g id="LOGO">
            <polygon
              id="Path-2"
              fill="#5F6060"
              points="29.4877389 0.28211282 84.0786431 0.28211282 58.5665846 49.9340209 29.4877389 49.9340209 16.1526504 74.4289247 0.48538909 56.2411202 0.48538909 49.9340209"
            ></polygon>
            <polygon
              id="Path-3"
              fill="#97C93C"
              points="73.6111218 28.7746417 87.3452494 48.2786616 59.0677916 102.389512 4.4897332 102.389512 30.6277781 52.95029 60.3881047 52.95029"
            ></polygon>
            <polygon
              id="Path-4"
              fill="#5F6060"
              points="88.0810271 52.855898 103.81033 74.7977917 90.1592683 102.957355 63.8234473 102.957355 63.8234473 99.275394"
            ></polygon>
          </g>
        </g>
      </svg>
    </StyledMargin>
  )
}
