import React, { useState } from "react"
import styled from "styled-components"

import addToCart from "../../utils/addToCart"
// import ImageLoader from "../orderImageLoader/ImageLoader"
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
const StyledImage = styled.img`
  width: ${({ width }) => width};
  height: ${({ width }) => width};
  border-radius: 5px;
`
const Gallery = ({ data, cartContext }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(data.gallery[0].url)
  const imageWidth = "400px"
  const selectedPhotoBorder = img =>
    selectedPhoto === img
      ? { border: "1px solid black", borderRadius: "5px" }
      : null
  return (
    <GalleryWrapper>
      {/* <ImageLoader name={selectedPhoto} width={imageWidth} /> */}
      <StyledImage src={`${selectedPhoto}`} width={imageWidth} />
      <ImagesWrapper>
        {/* <SelectImageBtn
          onClick={() => setSelectedPhoto(data.img)}
          style={selectedPhotoBorder(data.img)}
        >
          <ImageLoader name={data.img} width={"50px"} />
        </SelectImageBtn> */}
        {data.gallery.map(({ url }) => (
          <SelectImageBtn
            key={Math.random()}
            onClick={() => setSelectedPhoto(url)}
            style={selectedPhotoBorder(url)}
          >
            <StyledImage src={`${url}`} width={"50px"} />
          </SelectImageBtn>
        ))}
      </ImagesWrapper>
      <BuyWrapper>
        <BuyButton
          icon={CartImage}
          onClick={() => addToCart(cartContext, data)}
        >
          Add to cart
        </BuyButton>
        <PriceText>
          ONLY&nbsp;<Price>5$</Price>
        </PriceText>
      </BuyWrapper>
    </GalleryWrapper>
  )
}

export default Gallery
