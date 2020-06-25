import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

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
                fluid(maxWidth: 250) {
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
      const StyledImage = styled(Img)`
        width: ${width};
        border-radius: 5px;
      `
      return <StyledImage alt={name} fluid={imageSizes} />
    }}
  />
)

export default ImageLoader
