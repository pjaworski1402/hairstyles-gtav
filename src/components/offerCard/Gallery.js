import React, { useState } from "react"
import styled from "styled-components"

import addToCart from "../../utils/addToCart"
import Image from "../styledImage/Image"
import CartImage from "../../assets/images/cart.svg"
import BuyButton from "../buttons/PrimaryButton"

const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

const ImagesWrapper = styled.div`
  display: flex;
  max-width: 100%;
  overflow-x: auto;
`

const SelectImageBtn = styled.button`
  border: none;
  background-color: transparent;
`

const BuyWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const PriceText = styled.span`
  color: #4c4c4c;
  font-weight: 700;
  margin-left: 20px;
`
const Price = styled.span`
  font-size: 30px;
`

const Gallery = ({ data, cartContext }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(data.gallery[0])
  const imageWidth = "400px"
  const selectedPhotoBorder = img =>
    selectedPhoto === img
      ? { border: "1px solid black", borderRadius: "5px" }
      : null
  return (
    <GalleryWrapper>
      <Image src={selectedPhoto} width={imageWidth} />
      <ImagesWrapper>
        {data.gallery.map(media => {
          return (
            <SelectImageBtn
              key={Math.random()}
              onClick={() => setSelectedPhoto(media)}
              style={selectedPhotoBorder(media)}
            >
              <Image src={media} width={"50px"} />
            </SelectImageBtn>
          )
        })}
      </ImagesWrapper>
      <BuyWrapper>
        <BuyButton
          icon={CartImage}
          onClick={() => addToCart(cartContext, data)}
        >
          Add to cart
        </BuyButton>
        <PriceText>
          ONLY&nbsp;<Price>{data.price}$</Price>
        </PriceText>
      </BuyWrapper>
    </GalleryWrapper>
  )
}

export default Gallery
