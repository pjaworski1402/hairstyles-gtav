import React from "react"
import styled from "styled-components"

import instaico from "../../assets/images/instagram.svg"
import discord from "../../assets/images/discord.svg"

const FooterWraper = styled.footer`
  border: 1px solid black;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  position: relative;
`
const Link = styled.a`
  display: flex;
  align-items: center;
  width: 30px;
  margin: 20px 0;
  @media (min-width: 992px) {
    margin: 0 20px;
  }
`
const FooterHeader = styled.h1`
  font-size: 24px;
  font-family: "Offside", cursive;
  margin: auto;
`
const Author = styled.div`
  font-size: 10px;
  position: absolute;
  bottom: 1px;
  right: 2%;
`

const LinkImg = styled.img`
  width: 100%;
`

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`

const Footer = () => {
  return (
    <FooterWraper>
      <LinksWrapper>
        <Link
          target="_blank"
          rel="noopener"
          href="https://www.instagram.com/hairstyles_gta_v/"
        >
          <LinkImg src={instaico} alt="instagram" />
        </Link>
        <Link
          target="_blank"
          rel="noopener"
          href="https://discord.com/invite/u4AdR9m"
        >
          <LinkImg src={discord} alt="discord" />
        </Link>
      </LinksWrapper>
      <FooterHeader>
        <b>hairstyles gta5</b>
      </FooterHeader>
      <Author>Site created by Piotr Jaworski</Author>
      <div style={{ width: "30px" }} />
    </FooterWraper>
  )
}

export default Footer
