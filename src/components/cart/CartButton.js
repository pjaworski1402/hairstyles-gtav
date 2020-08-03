import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import CartButtonImage from "../../assets/images/cartButton.svg"
import { CartContext } from "../../context/globalContext"
import Overlay from "../overlay/Overlay"
import CartContent from "./CartContent"
import { addQueryToLink } from "../../helper/linkController"

const CartWrapper = styled(Link)`
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
  const cartContext = useContext(CartContext)
  return (
    <CartWrapper img={CartButtonImage} to={addQueryToLink(`?overlay=cart`)}>
      <CartCounter>{cartContext.state.length}</CartCounter>
    </CartWrapper>
  )
}

const Cart = () => {
  return (
    <Overlay title={"Cart"}>
      <CartContent />
    </Overlay>
  )
}

export default CartButton
export { Cart }
