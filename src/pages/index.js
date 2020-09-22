import React from "react"
import { Location } from "@reach/router"
import { createGlobalStyle } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/topBanner/topBanner"
import Offers from "../components/offers/Offers"
import Search from "../components/search/Search"
import queryString from "query-string"
import Contact from "../components/contact/Contact"
import YOS from "../components/yourOwnStyle/YourOwnStyle"
import { Cart } from "../components/cart/CartButton"
import BurgerOverlay from "../components/topBar/BurgerOverlay"
import PayIsDone from "../components/payIsDone/PayIsDone"

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
        <Location>
          {({ location }) => {
            const openOverlay = queryString.parse(location.search).overlay
            switch (openOverlay) {
              case "contact":
                return <Contact />
              case "yos":
                return <YOS />
              case "cart":
                return <Cart />
              case "burger":
                return <BurgerOverlay />
              case "done":
                return <PayIsDone />
              default:
                break
            }
          }}
        </Location>
        <SEO title="SHOP" />
        <Banner />
        <Search />
        <Offers />
      </Layout>
    </>
  )
}
export default IndexPage
