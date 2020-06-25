import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const LogoImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(quality: 10, maxWidth: 35) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const StyledImg = styled(Img)`
    width: 35px;
  `

  return <StyledImg fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default LogoImage
