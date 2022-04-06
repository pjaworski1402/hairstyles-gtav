import React from "react"
import styled from "styled-components"

import instaico from "../../assets/images/instagram.svg"
import discord from "../../assets/images/discord.svg"

const FooterWraper = styled.footer`
  border: 1px solid black;
  padding: 15px;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
  position: relative;
  .policies{
    border-top: 1px solid black;
    padding-top: 28px;
    width: 100%;
    display:flex;
    list-style:none;
    justify-content: space-evenly;
    font-size: 13px;
    a{
      color:black;
    text-decoration: none;
    }
  }
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
          href="https://discord.gg/NJcfymTPs7"
        >
          <LinkImg src={discord} alt="discord" />
        </Link>
      </LinksWrapper>
      <FooterHeader>
        <b>hairstyles gta5</b>
      </FooterHeader>
      <Author>Site created by Piotr Jaworski</Author>
      <div style={{ width: "30px" }} />
      <ul className="policies">
        <li>
          <a href="/privacypolicy" target="_blank" rel="noreferrer">Privacy Policy</a>
        </li>
        <li>
          <a href="/terms" target="_blank" rel="noreferrer">Terms and Conditions</a>
        </li>
        <li>
          <a href="/cookies" target="_blank" rel="noreferrer">The use of the Cookies</a>
        </li>
        <li>
          <a href="/refund" target="_blank" rel="noreferrer">Refund and Returns Policy</a>
        </li>
      </ul>
    </FooterWraper>
  )
}

export default Footer
