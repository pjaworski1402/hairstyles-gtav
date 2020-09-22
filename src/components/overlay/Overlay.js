import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { removeQueryFromLink } from "../../helper/linkController"
import overlayClose from "../../assets/images/overlayClose.svg"

const OverlayBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(166, 166, 166, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`

const OverlayWindow = styled.div`
  background-color: white;
  position: relative;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1% 10%;
  @media (min-width: 992px) {
    width: 90%;
    border-radius: 20px;
    height: 90%;
  }
`

const OverlayTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  height: 15%;
`

const OverlayTitle = styled.h1`
  font-family: Roboto, sans-serif;
  font-weight: 100;
  font-size: 36px;
  text-transform: uppercase;
  max-width: 80%;
`

const OverlayCloseButton = styled(Link)`
  width: 30px;
  height: 30px;
  background-color: transparent;
  background-image: url(${overlayClose});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
`

const OverlayContent = styled.div`
  height: 85%;
`

const Overlay = ({ title, children }) => {
  return (
    <OverlayBackground>
      <OverlayWindow>
        <OverlayTopWrapper>
          <OverlayTitle>{title}</OverlayTitle>
          <OverlayCloseButton to={removeQueryFromLink("overlay")} />
        </OverlayTopWrapper>
        <OverlayContent>{children}</OverlayContent>
      </OverlayWindow>
    </OverlayBackground>
  )
}

export default Overlay
