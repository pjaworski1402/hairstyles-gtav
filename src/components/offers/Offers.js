import React from "react"
import styled from "styled-components"

import Title from "../title/Title"
import OffersJS from "../../content/offers.js"
import OfferCard from "../offerCard/OfferCard"
import NewStyleCard from "../newStyleCard/NewStyleCard"

const StyledOffersList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`

const Offers = () => {
  return (
    <>
      <Title>for woman</Title>
      <StyledOffersList>
        {OffersJS.offersWoman.map(data => (
          <OfferCard key={data.id} data={data} />
        ))}
        <NewStyleCard />
        <Title>for man</Title>
        {OffersJS.offersMan.map(data => (
          <OfferCard key={data.id} data={data} />
        ))}
        <NewStyleCard />
      </StyledOffersList>
    </>
  )
}

export default Offers
