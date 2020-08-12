import React, { useContext } from "react"
import { Link } from "gatsby"
import { Location } from "@reach/router"
import styled from "styled-components"
import queryString from "query-string"

import Title from "../title/Title"
import OffersJS from "../../content/offers.js"
import OfferCard from "../offerCard/OfferCard"
import NewStyleCard from "../newStyleCard/NewStyleCard"
import { SearchContext } from "../../context/globalContext"
import { addQueryToLink } from "../../helper/linkController"
import find from "../../utils/findEngine"

const StyledOffersList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`

const ShowMoreButton = styled(Link)`
  text-decoration: none;
  width: 100%;
  text-align: center;
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

const OffersTab = ({ title, showAllStatus, group, offersToRender }) => {
  const length = showAllStatus ? offersToRender.length : 3
  return (
    <>
      <Title>{title}</Title>
      {offersToRender.slice(0, length).map(data => (
        <OfferCard key={data.id} data={data} />
      ))}
      <ShowMoreButton
        to={addQueryToLink(`?group=${group}`)}
        style={{
          display: showAllStatus ? "none" : "block",
        }}
      >
        {`Show all ${group} offers`}
        <ArrowDown />
      </ShowMoreButton>
      <NewStyleCard />
    </>
  )
}

const Offers = () => {
  const searchValue = useContext(SearchContext).searchState
  console.log(find(searchValue))
  return (
    <StyledOffersList>
      <Location>
        {({ location }) => {
          const { group } = queryString.parse(location.search)
          const Render = () => {
            switch (group) {
              case "woman":
                return (
                  <OffersTab
                    showAllStatus={true}
                    group="woman"
                    offersToRender={OffersJS.woman}
                    title="hairstyles for woman"
                  />
                )
              case "man":
                return (
                  <OffersTab
                    showAllStatus={true}
                    group="man"
                    offersToRender={OffersJS.man}
                    title="hairstyles for man"
                  />
                )

              default:
                const findedOffers = find(searchValue)
                if (searchValue && findedOffers.length > 0) {
                  return (
                    <OffersTab
                      showAllStatus={true}
                      group="finded"
                      offersToRender={findedOffers}
                      title="finded hairstyles"
                    />
                  )
                } else {
                  return (
                    <>
                      <OffersTab
                        showAllStatus={false}
                        group="woman"
                        offersToRender={OffersJS.woman}
                        title="hairstyles for woman"
                      />
                      <OffersTab
                        showAllStatus={false}
                        group="man"
                        offersToRender={OffersJS.man}
                        title="hairstyles for man"
                      />
                    </>
                  )
                }
            }
          }
          return <Render />
        }}
      </Location>
    </StyledOffersList>
  )
}

export default Offers
