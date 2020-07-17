import React, { useContext } from "react"
import styled from "styled-components"

import Title from "../title/Title"
import OffersJS from "../../content/offers.js"
import OfferCard from "../offerCard/OfferCard"
import NewStyleCard from "../newStyleCard/NewStyleCard"
import { SearchContext } from "../../context/globalContext"

const StyledOffersList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`

const DefaultSearch = () => {
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

const FilteredOffers = () => {
  let offerss = []
  const searchContext = useContext(SearchContext)
  const tags = searchContext.searchState.split(" ")
  const allOffers = [...OffersJS.offersWoman, ...OffersJS.offersMan]

  // allOffers.forEach((offer, index, arr) => {
  //   const offerTags = offer.tags.join(" ")
  //   console.log(offerTags)
  //   tags.forEach(tagg => {
  //     if (offerTags.includes(tagg.toLowerCase())) {
  //       offerss.push(offer)
  //     }
  //   })
  // })

  return (
    <>
      {!offerss.length > 0 ? (
        <DefaultSearch />
      ) : (
        <>
          <Title>finded</Title>
          <StyledOffersList>
            {offerss.map(data => (
              <OfferCard key={data.id} data={data} />
            ))}
            <NewStyleCard />
          </StyledOffersList>
        </>
      )}
    </>
  )
}

const Offers = () => {
  return <FilteredOffers />
}

export default Offers
