import React, { useContext } from "react"
import styled from "styled-components"

import PrimaryButton from "../buttons/PrimaryButton"
import CartImage from "../../assets/images/cart.svg"
import ImageLoader from "../orderImageLoader/ImageLoader"
import { CartContext } from "../../context/cartContext"

const StyledOfferCard = styled.div`
  background-color: #f9faff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 25%);
  margin: 20px;
  padding: 25px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    padding: 40px;
  }
`

const StyledPrice = styled.span`
  font-weight: 700;
  font-size: 24px;
  margin-left: 25px;
`

const BuyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5%;
`

const TagWrapper = styled.ul`
  width: ${({ width }) => width};
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  padding: 0;
  font-size: 14px;
`

const StyledTag = styled.li`
  list-style: none;
  padding: 0 5px;
  margin: 0 5px 5px 5px;
  background-color: rgba(39, 83, 255, 0.3);
  border-radius: 5px;
  color: white;
  :hover {
    background-color: rgba(39, 83, 255, 0.8);
    cursor: pointer;
  }
`
const imageWidth = "250px"

const OfferCard = ({ data }) => {
  const context = useContext(CartContext)
  const addToCart = () => {
    const inCart = context.state.find(state => state.id === data.id)
    if (typeof inCart === "undefined") {
      context.addOrder(data)
    } else {
      window.alert("Already added!")
    }
  }
  return (
    <StyledOfferCard>
      <ImageLoader name={data.img} width={imageWidth} />
      <TagWrapper width={imageWidth}>
        Tags:
        {data.tags.map(tagName => (
          <StyledTag key={tagName}>#{tagName}</StyledTag>
        ))}
      </TagWrapper>
      <BuyWrapper>
        <PrimaryButton icon={CartImage} onClick={addToCart}>
          Add to cart
        </PrimaryButton>
        <StyledPrice>{data.price}$</StyledPrice>
      </BuyWrapper>
    </StyledOfferCard>
  )
}

export default OfferCard
