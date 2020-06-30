import React, { useContext, useState } from "react"
import styled from "styled-components"

import CartButtonImage from "../../assets/images/cartButton.svg"
import { CartContext } from "../../context/cartContext"
import Overlay from "../overlay/Overlay"
import CartContent from "./CartContent"

const CartWrapper = styled.button`
  position: fixed;
  z-index: 1;
  bottom: 3%;
  right: 3%;
  width: 70px;
  height: 70px;
  background-image: url(${props => props.img});
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
`
const CartCounter = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #2753ff;
  color: white;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CartButton = () => {
  const [overlayOpen, setOverlayOpen] = useState(false)
  const cartContext = useContext(CartContext)
  return (
    <>
      {overlayOpen && (
        <Overlay title={"Cart"} setOverlayOpen={setOverlayOpen}>
          <CartContent />
        </Overlay>
      )}
      <CartWrapper
        img={CartButtonImage}
        onClick={() => setOverlayOpen(!overlayOpen)}
      >
        <CartCounter>{cartContext.state.length}</CartCounter>
      </CartWrapper>
    </>
  )
}

export default CartButton
