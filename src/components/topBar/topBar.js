import React from "react"
import LogoImage from "./LogoImage"
import styled from "styled-components"

import burger from "../../assets/images/burger.svg"

const navs = [
  {
    name: "for woman",
    navTo: "/",
  },
  {
    name: "for man",
    navTo: "/",
  },
  {
    name: "custom hair",
    navTo: "/",
  },
  {
    name: "instruction",
    navTo: "/",
  },
  {
    name: "contact",
    navTo: "/",
  },
]

const TopBarWrapper = styled.nav`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #fff;
  width: 100%;
  justify-content: space-between;
`
const Burger = styled.button`
  width: 25px;
  height: 15px;
  background-image: url(${burger});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  justify-self: right;
  margin-left: auto;
  @media (min-width: 992px) {
    display: none;
  }
`
const StyledNavs = styled.div`
  text-transform: uppercase;
  color: black;
  font-weight: 100;
  margin-left: 5%;
  text-decoration: none;
`

const BannerText = styled.span`
  font-size: 20px;
  margin: 0 20px;
  font-family: "Offside", cursive;
  float: left;
`

const TopBar = () => {
  return (
    <TopBarWrapper>
      <LogoImage />
      <BannerText>hairstyles-gta5</BannerText>
      {navs.map(({ navTo, name }) => (
        <StyledNavs href={navTo}>{name}</StyledNavs>
      ))}
      <Burger />
    </TopBarWrapper>
  )
}

export default TopBar
