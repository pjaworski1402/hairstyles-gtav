import React, { useState } from "react"
import LogoImage from "./LogoImage"
import styled from "styled-components"

import navs from "./navsRoutes"
import burger from "../../assets/images/burger.svg"
import BurgerOverlay from "./BurgerOverlay"

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
const StyledNavs = styled.a`
  display: none;
  text-transform: uppercase;
  color: black;
  font-weight: 100;
  font-size: 20px;
  margin-left: 5%;
  text-decoration: none;
  @media (min-width: 992px) {
    display: block;
  }
`

const BannerText = styled.span`
  font-size: 20px;
  font-family: "Offside", cursive;
  margin-right: auto;
  margin-left: 20px;
`

const TopBar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false)
  return (
    <>
      {burgerOpen && <BurgerOverlay closeBurger={setBurgerOpen} />}
      <TopBarWrapper>
        <LogoImage />
        <BannerText>hairstyles-gta5</BannerText>
        {navs.map(({ navTo, name }) => (
          <StyledNavs key={name} href={navTo}>
            {name}
          </StyledNavs>
        ))}
        <Burger onClick={() => setBurgerOpen(!burgerOpen)} />
      </TopBarWrapper>
    </>
  )
}

export default TopBar
