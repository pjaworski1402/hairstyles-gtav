import React from "react"
import PropTypes from "prop-types"

import TopBar from "./topBar/TopBar"
import CartButton from "./cartButton/CartButton"
import Footer from "./footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      {children}
      <CartButton />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
