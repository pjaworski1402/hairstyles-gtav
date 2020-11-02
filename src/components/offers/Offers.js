import React, { useContext } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Location } from "@reach/router"
import styled from "styled-components"
import queryString from "query-string"

import Title from "../title/Title"
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
        <OfferCard key={data.strapiId} data={data} />
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
  const data = useStaticQuery(graphql`
    query Offers {
      allStrapiOffer {
        nodes {
          tags {
            tagName
            id
          }
          price
          strapiId
          isFree
          category {
            id
          }
          gallery {
            url
            name
            localFile {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
      allStrapiCategory {
        nodes {
          title
          strapiId
          group
        }
      }
    }
  `)
  const categories = data.allStrapiCategory.nodes
  const offers = data.allStrapiOffer.nodes
  const offersByCategories = id => {
    let offersToReturn = []
    offers.forEach(offer => {
      if (offer.category.id === id) {
        offersToReturn.push(offer)
      }
    })
    return offersToReturn
  }
  return (
    <StyledOffersList>
      <Location>
        {({ location }) => {
          const { group } = queryString.parse(location.search)
          const Render = () => {
            if (group) {
              const groupData = categories.find(
                category => category.group === group
              )
              let findedOffers = offersByCategories(groupData.strapiId)

              if (searchValue && findedOffers.length > 0) {
                findedOffers = find(searchValue, findedOffers)
              }
              return (
                <OffersTab
                  key={groupData.strapiId}
                  showAllStatus={true}
                  group={groupData.group}
                  offersToRender={findedOffers}
                  title={groupData.title}
                />
              )
            } else {
              const findedOffers = find(searchValue, offers)
              if (searchValue && findedOffers.length > 0) {
                return (
                  <OffersTab
                    showAllStatus={true}
                    group={"finded"}
                    offersToRender={findedOffers}
                    title={"finded offers"}
                  />
                )
              } else {
                return categories.map(category => (
                  <OffersTab
                    key={category.strapiId}
                    showAllStatus={false}
                    group={category.group}
                    offersToRender={offersByCategories(category.strapiId)}
                    title={category.title}
                  />
                ))
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
