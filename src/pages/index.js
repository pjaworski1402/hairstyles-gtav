import React from "react"
import { createGlobalStyle } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/topBanner/topBanner"
import LastUpdateDate from "../components/lastUpdateDate/lastUpdateDate"
import Offers from "../components/offers/Offers"

const GlobalStyle = createGlobalStyle`
body{
  margin:0;
  padding:0;
  font-family: 'Open Sans', sans-serif;
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
      <Offers />
    </Layout>
  </>
)

export default IndexPage
