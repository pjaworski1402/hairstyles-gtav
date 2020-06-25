import React from "react"
import styled from "styled-components"

import PrimaryButton from "../buttons/PrimaryButton"
import CartImage from "../../assets/images/cart.svg"
import ImageLoader from "./ImageLoader"

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

const OfferCard = ({ data }) => {
  const imageWidth = "250px"
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
        <PrimaryButton icon={CartImage}>Add to cart</PrimaryButton>
        <StyledPrice>{data.price}$</StyledPrice>
      </BuyWrapper>
    </StyledOfferCard>
  )
}

export default OfferCard
