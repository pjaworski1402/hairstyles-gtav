import React from "react"
import styled from "styled-components"

import InstaIco from "../../assets/images/instagram.svg"

const FooterWraper = styled.footer`
  border: 1px solid black;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  position: relative;
`
const Instagram = styled.a`
  display: flex;
  align-items: center;
  width: 30px;
`
const FooterHeader = styled.h1`
  font-size: 24px;
  font-family: "Offside", cursive;
`
const Author = styled.div`
  font-size: 10px;
  position: absolute;
  bottom: 1px;
  right: 2%;
`

const InstaImg = styled.img`
  width: 100%;
`

const Footer = () => {
  return (
    <FooterWraper>
      <Instagram
        target="_blank"
        rel="noopener"
        href="https://www.instagram.com/hairstyles_gta_v/"
      >
        <InstaImg src={InstaIco} alt="instagram" />
      </Instagram>
      <FooterHeader>
        <b>hairstyles gta5</b>
      </FooterHeader>
      <Author>Site created by Piotr Jaworski</Author>
      <div style={{ width: "30px" }} />
    </FooterWraper>
  )
}

export default Footer
