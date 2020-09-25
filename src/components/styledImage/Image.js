import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledImage = styled(Img)`
  width: ${({ width }) => width};
  height: ${({ width }) => width};
  border-radius: 5px;
`
const Image = ({ alt, width, src }) => {
  return (
    <StyledImage
      alt={alt}
      fluid={src.localFile.childImageSharp.fluid}
      width={width}
    />
  )
}

export default Image
