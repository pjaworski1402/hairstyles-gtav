import React, { useContext } from "react"
import { createGlobalStyle } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/topBanner/topBanner"
import LastUpdateDate from "../components/lastUpdateDate/lastUpdateDate"
import Offers from "../components/offers/Offers"
import { CartContext } from "../context/cartContext"
const GlobalStyle = createGlobalStyle`
body{
  margin:0;
  padding:0;
  font-family: 'Open Sans', sans-serif;
}
*, *::before, *::after{
  box-sizing:border-box;
}
button:hover{
  cursor: pointer;
}
`

const IndexPage = () => {
  const context = useContext(CartContext)
  console.log(context)
  return (
    <>
      <GlobalStyle />
      <button onClick={() => context.addOrder()}></button>
      <Layout>
        <SEO title="Home" />
        <Banner />
        <LastUpdateDate />
        <Offers />
      </Layout>
    </>
  )
}
export default IndexPage
