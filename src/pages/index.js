import React from "react"
import { createGlobalStyle } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/topBanner/topBanner"
import Offers from "../components/offers/Offers"
import Search from "../components/search/Search"

const GlobalStyle = createGlobalStyle`
body{
  margin:0;
  padding:0;
  font-family: 'Open Sans', sans-serif;
}
*, *::before, *::after{
  box-sizing:border-box;
}
button{
  font-family: Open Sans, 'sans-serif'
}
button:hover{
  cursor: pointer;
}
`

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <SEO title="Home" />
        <Banner />
        <Search />
        <Offers />
      </Layout>
    </>
  )
}
export default IndexPage
