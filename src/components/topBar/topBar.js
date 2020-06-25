import React from "react"
import LogoImage from "./LogoImage"
import styled from "styled-components"

import burger from "../../assets/images/burger.svg"

const TopBarWrapper = styled.div`
  /* height: 64px; */
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
`
const BannerText = styled.span`
  font-size: 20px;
  margin: 0 20px;
  font-family: "Offside", cursive;
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
