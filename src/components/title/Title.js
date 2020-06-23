import React from "react"
import styled from "styled-components"

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 36px;
  text-transform: uppercase;
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
`

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>
}

export default Title
