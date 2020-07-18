import React, { useContext } from "react"
import { Location } from "@reach/router"
import styled from "styled-components"
import queryString from "query-string"

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

const ShowMoreButton = styled.button`
  width: 100%;
  margin: 25px 0;
  background-color: transparent;
  color: #2753ff;
  font-weight: 700;
  font-size: 24px;
  border: none;
  @media (min-width: 992px) {
    margin: 40px 0;
  }
`

const ArrowDown = styled.i`
  border: solid #27539f;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  margin: 5px 10px;
`

const ForWoman = ({ showAllStatus, handleShowMoreButton }) => {
  const onlyWoman = queryString.parse(window.location.search).sex === "woman"
  return (
    <>
      <Title>for woman</Title>
      {OffersJS.offersWoman.slice(0, showAllStatus).map(data => (
        <OfferCard key={data.id} data={data} />
      ))}
      <ShowMoreButton
        onClick={() => handleShowMoreButton("woman")}
        style={{ display: onlyWoman ? "none" : "block" }}
      >
        Show all woman offers
        <ArrowDown />
      </ShowMoreButton>
      <NewStyleCard />
    </>
  )
}

const ForMan = ({ showAllStatus, handleShowMoreButton }) => {
  const onlyMan = queryString.parse(window.location.search).sex === "man"
  return (
    <>
      <Title>for man</Title>
      {OffersJS.offersMan.slice(0, showAllStatus).map(data => (
        <OfferCard key={data.id} data={data} />
      ))}
      <ShowMoreButton
        onClick={() => handleShowMoreButton("man")}
        style={{ display: onlyMan ? "none" : "block" }}
      >
        Show all man offers
        <ArrowDown />
      </ShowMoreButton>
      <NewStyleCard />
    </>
  )
}

const DefaultSearch = () => {
  const handleShowMoreButton = sex => {
    window.location.search = `sex=${sex}`
  }
  return (
    <StyledOffersList>
      <Location>
        {({ location }) => {
          const { sex } = queryString.parse(location.search)
          const Render = () => {
            switch (sex) {
              case "woman":
                return (
                  <ForWoman
                    showAllStatus={OffersJS.offersWoman.length}
                    handleShowMoreButton={handleShowMoreButton}
                  />
                )
              case "man":
                return (
                  <ForMan
                    showAllStatus={OffersJS.offersMan.length}
                    handleShowMoreButton={handleShowMoreButton}
                  />
                )

              default:
                return (
                  <>
                    <ForWoman
                      showAllStatus={3}
                      handleShowMoreButton={handleShowMoreButton}
                    />
                    <ForMan
                      showAllStatus={3}
                      handleShowMoreButton={handleShowMoreButton}
                    />
                  </>
                )
            }
          }
          return <Render />
        }}
      </Location>
    </StyledOffersList>
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
