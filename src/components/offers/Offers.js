import React from "react"
import styled from "styled-components"

import Title from "../title/Title"
import OffersJSONData from "../../content/offers.json"
import OfferCard from "../offerCard/OfferCard"
import NewStyleCard from "../newStyleCard/NewStyleCard"

const StyledOffersList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const Offers = () => {
  return (
    <>
      <Title>for woman</Title>
      <StyledOffersList>
        {OffersJSONData.offersWoman.map(data => (
          <OfferCard data={data} />
        ))}
        <NewStyleCard />
        <Title>for man</Title>
        {OffersJSONData.offersMan.map(data => (
          <OfferCard data={data} />
        ))}
        <NewStyleCard />
      </StyledOffersList>
    </>
  )
}

export default Offers
