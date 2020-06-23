import React from "react"
import LogoImage from "./LogoImage"
import styled from "styled-components"

import burger from "../../assets/images/burger.svg"

const TopBarWrapper = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 0 15px black;
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
`
const BannerText = styled.span`
  font-size: 24px;
  margin: 0 20px;
`

const TopBar = () => {
  return (
    <TopBarWrapper>
      <LogoImage />
      <BannerText>hairstyles-gta5</BannerText>
      <Burger />
    </TopBarWrapper>
  )
}

export default TopBar
