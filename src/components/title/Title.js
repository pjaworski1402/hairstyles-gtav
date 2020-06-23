import React from "react"
import styled from "styled-components"

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 36px;
`

const Title = ({ child }) => {
  return <StyledTitle>{child}</StyledTitle>
}

export default Title
