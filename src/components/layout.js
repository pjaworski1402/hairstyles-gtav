import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import TopBar from "./topBar/topBar"

const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
