import React from "react"
import styled from "styled-components"

import Overlay from "../overlay/Overlay"
import navs from "./navsRoutes"

const NavsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 -10%;
  max-height: 100%;
`

const StyledNavs = styled.a`
  text-transform: uppercase;
  color: black;
  font-family: Roboto, sans-serif;
  font-weight: 100;
  font-size: 30px;
  text-decoration: none;
  border-bottom: 1px solid gray;
  width: 100%;
  text-align: center;
  padding: 20px 0;
`

const BurgerOverlay = () => {
  return (
    <Overlay title={"menu"}>
      <NavsWrapper>
        {navs.map(({ navTo, name }) => (
          <StyledNavs key={name} href={navTo}>
            {name}
          </StyledNavs>
        ))}
      </NavsWrapper>
    </Overlay>
  )
}

export default BurgerOverlay
