import React from "react"
import styled from "styled-components"
const StyledImage = styled.img`
  width: ${({ width }) => width};
  height: ${({ width }) => width};
  border-radius: 5px;
`
const Image = ({ alt, width, src }) => (
  <StyledImage alt={alt} src={src} width={width} />
)

export default Image
