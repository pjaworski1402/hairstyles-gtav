import React from "react"
import styled from "styled-components"

// import Template from "../../assets/images/template.jpg"
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
`

const BuyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TagWrapper = styled.ul`
  width: 20%;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`

const StyledTag = styled.li`
  list-style: none;
  padding: 0 5px;
`

const OfferCard = ({ data }) => {
  return (
    <StyledOfferCard>
      {/* <img src={data.img} width="300px" /> */}
      <ImageLoader name={data.img} />
      <TagWrapper>
        Tags:
        {/* {data.tags.map(tagName => (
          <StyledTag>{tagName}</StyledTag>
        ))} */}
      </TagWrapper>
      <BuyWrapper>
        <PrimaryButton icon={CartImage}>Add to cart</PrimaryButton>
        <StyledPrice>{data.price}$</StyledPrice>
      </BuyWrapper>
    </StyledOfferCard>
  )
}

export default OfferCard
