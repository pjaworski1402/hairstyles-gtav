import React, { useContext } from "react"
import PropTypes from "prop-types"

import YOS from "./yourOwnStyle/YourOwnStyle"
import TopBar from "./topBar/TopBar"
import CartButton from "./cartButton/CartButton"
import Footer from "./footer/Footer"
import { YOSContext } from "../context/globalContext"

const Layout = ({ children }) => {
  const context = useContext(YOSContext)
  return (
    <>
      {context.stateYOS && <YOS />}
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
