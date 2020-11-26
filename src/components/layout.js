import React, {useState} from "react"
import PropTypes from "prop-types"

import TopBar from "./topBar/TopBar"
import CartButton from "./cart/CartButton"
import Footer from "./footer/Footer"
import Cookie from "../components/cookie/Cookie"
import {getCookie} from "../utils/cookies"

if (typeof window !== "undefined") {
  window.addEventListener(
    "dragover",
    function (e) {
      e.preventDefault()
    },
    false
  )
  window.addEventListener(
    "drop",
    function (e) {
      e.preventDefault()
    },
    false
  )
}
const Layout = ({ children }) => {
  const [cookie, setCookieState]=useState(getCookie("cookieAccept"));
  return (
    <>
      <TopBar />
      {children}
      <CartButton />
      {cookie==="1"?null:<Cookie setCookieState={setCookieState} />}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
