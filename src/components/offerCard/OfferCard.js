import React, { useContext, useState } from "react"
import styled from "styled-components"

import addToCart from "../../utils/addToCart"
import PrimaryButton from "../buttons/PrimaryButton"
import CartImage from "../../assets/images/cart.svg"
import ImageLoader from "../orderImageLoader/ImageLoader"
import { CartContext } from "../../context/globalContext"
import Overlay from "../overlay/Overlay"
import Gallery from "./Gallery"

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
  background-color: rgba(39, 83, 255, .8);
  border-radius: 5px;
  color: white;
  :hover {
    background-color: rgba(39, 83, 255, 1);
    cursor: pointer;
  }
`
const ImageButton = styled.button`
  position: relative;
  border: none;
  display: flex;
  background-color: transparent;
  :hover {
    ::after {
      content: "View all images";
      font-size: 18px;
      color: white;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

const TagTitle = styled.li`
  margin: 0 5px 5px 5px;
  list-style:none;
`

const imageWidth = "250px"

const OfferCard = ({ data }) => {
  const [overlayOpen, setOverlayOpen] = useState(false)
  const context = useContext(CartContext)

  return (
    <>
      {overlayOpen && (
        <Overlay title={"Gallery"} setOverlayOpen={setOverlayOpen}>
          <Gallery data={data} context={context} />
        </Overlay>
      )}
      <StyledOfferCard>
        <ImageButton onClick={() => setOverlayOpen(true)}>
          <ImageLoader name={data.img} width={imageWidth} />
        </ImageButton>
        <TagWrapper width={imageWidth}>
          <TagTitle>Tags:</TagTitle>
          {data.tags.map(tagName => (
            <StyledTag key={tagName}>#{tagName}</StyledTag>
          ))}
        </TagWrapper>
        <BuyWrapper>
          <PrimaryButton
            icon={CartImage}
            onClick={() => addToCart(context, data)}
          >
            Add to cart
          </PrimaryButton>
          <StyledPrice>{data.price}$</StyledPrice>
        </BuyWrapper>
      </StyledOfferCard>
    </>
  )
}

export default OfferCard
