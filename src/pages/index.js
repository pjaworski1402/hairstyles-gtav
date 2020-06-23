import React from "react"
import { createGlobalStyle } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/topBanner/topBanner"
import LastUpdateDate from "../components/lastUpdateDate/lastUpdateDate"

const GlobalStyle = createGlobalStyle`
body{
  margin:0;
  padding:0;
}
*, *::before, *::after{
  box-sizing:border-box;
}
`

const IndexPage = () => (
  <>
    <GlobalStyle />
    <Layout>
      <SEO title="Home" />
      <Banner />
      <LastUpdateDate />
    </Layout>
  </>
)

export default IndexPage
