import React, { useContext } from "react"
import styled from "styled-components"
import ImageLoader from "../orderImageLoader/ImageLoader"

import { CartContext } from "../../context/cartContext"
import deleteButton from "../../assets/images/deleteButton.svg"
import BuyButton from "../buttons/PrimaryButton"
import CartImage from "../../assets/images/cart.svg"

const OrderCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  height: 80%;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  align-items: flex-start;
`

const OrderCard = styled.div`
  position: relative;
  display: flex;
  font-size: 24px;
  font-weight: 700;
  align-items: center;
  padding: 20px;
  background-color: #f9faff;
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  justify-content: space-between;
  flex-basis: 220px;
  margin: 0 40px 30px 0;
`

const DeleteOrderBtn = styled.button`
  position: absolute;
  right: -10px;
  top: -10px;
  width: 25px;
  height: 25px;
  background-image: url(${deleteButton});
  background-size: cover;
  background-color: transparent;
  border: none;
`

const BuySection = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 992px) {
    justify-content: flex-end;
  }
`

const Price = styled.span`
  font-size: 18px;
  font-weight: 700;
  margin-right: 20px;
`

const CartContent = () => {
  const cartContext = useContext(CartContext)
  console.log(cartContext)
  return (
    <>
      <OrderCardWrapper>
        {cartContext.state.map(order => (
          <OrderCard key={order.id}>
            <DeleteOrderBtn onClick={() => cartContext.removeOrder(order.id)} />
            <ImageLoader name={order.img} width={"100px"} />
            <div>{order.price}$</div>
          </OrderCard>
        ))}
      </OrderCardWrapper>
      <BuySection>
        <Price>Total price: 5$</Price>
        <BuyButton icon={CartImage}>Buy now</BuyButton>
      </BuySection>
    </>
  )
}

export default CartContent
