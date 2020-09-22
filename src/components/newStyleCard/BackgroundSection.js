import React from "react"
import { graphql, StaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "readingBook.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, grayscale: true) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          fluid={imageData}
          backgroundColor={`white`}
          style={{ width: "100%", backgroundPosition: "center 92%" }}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

export default BackgroundSection
