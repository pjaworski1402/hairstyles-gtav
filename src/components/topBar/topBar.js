import React from "react"
import LogoImage from "./LogoImage"
import styled from "styled-components"
import { Link } from "gatsby"

import { addQueryToLink } from "../../helper/linkController"
import navs from "./navsRoutes"
import burger from "../../assets/images/burger.svg"

const Logo = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  margin-right: auto;
`

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
const Burger = styled(Link)`
  width: 25px;
  height: 15px;
  border: none;
  justify-self: right;
  margin-left: auto;
  @media (min-width: 992px) {
    display: none;
  }
`
const StyledNavs = styled(Link)`
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

const LogoText = styled.span`
  font-size: 20px;
  font-family: "Offside", cursive;
  margin-left: 20px;
`

const BurgerIco = styled.img`
width:100%;
`

const TopBar = () => {
  return (
    <>
      <TopBarWrapper>
        <Logo href="/">
          <LogoImage />
          <LogoText>hairstyles-gta5</LogoText>
        </Logo>
        {navs.map(({ navTo, name }) => {
          return (
            <StyledNavs key={name} to={addQueryToLink(navTo)}>
              {name}
            </StyledNavs>
          )
        })}
        <Burger to={addQueryToLink(`?overlay=burger`)}>
          <BurgerIco src={burger} alt="menu" />
        </Burger>
      </TopBarWrapper>
    </>
  )
}

export default TopBar
