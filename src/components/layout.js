import React from "react"
import PropTypes from "prop-types"

import TopBar from "./topBar/topBar"
import Footer from "./footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
