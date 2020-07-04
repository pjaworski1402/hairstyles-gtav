import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
const StyledImage = styled(Img)`
  width: ${({ width }) => width};
  height: ${({ width }) => width};
  border-radius: 5px;
`
const ImageLoader = ({ name, width }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(
          filter: { sourceInstanceName: { eq: "offersImages" } }
        ) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(name)
      })
      if (!image) {
        return null
      }

      const imageSizes = image.node.childImageSharp.fluid

      return <StyledImage alt={name} fluid={imageSizes} width={width} />
    }}
  />
)

export default ImageLoader
