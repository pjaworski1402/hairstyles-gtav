import React, { useContext } from "react"
import styled from "styled-components"
import queryString from "query-string"
import { useStaticQuery, graphql } from "gatsby"

import Input from "../inputs/PrimaryInput"
import { SearchContext } from "../../context/globalContext"
import Button from "../buttons/PrimaryButton"
import backArrow from "../../assets/images/back.svg"

const isBrowser = typeof window !== `undefined`

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  position: relative;
`
const LastUpdateStyled = styled.div`
  font-weight: 200;
  font-size: 14px;
`

const ClearTags = styled.button`
  color: #2753ff;
  background-color: transparent;
  border: none;
  position: absolute;
  right: 0;
  bottom: -100%;
  display: ${({ isDisplayed }) => (isDisplayed ? "initial" : "none")};
`

const Search = () => {
  const searchContext = useContext(SearchContext)
  const data = useStaticQuery(graphql`
    {
      currentBuildDate {
        currentDate
      }
    }
  `)
  const handleClickClear = () => {
    searchContext.setSearch("")
  }
  return (
    <SearchWrapper>
      {isBrowser ? (
        queryString.parse(window.location.search).group ? (
          <Button isLink to="/" icon={backArrow}>
            Back
          </Button>
        ) : (
          <LastUpdateStyled>
            Last update: {data.currentBuildDate.currentDate}
          </LastUpdateStyled>
        )
      ) : null}
      <Input
        placeholder="Search"
        width="40%"
        fontSize="20px"
        value={searchContext.searchState}
        onChange={e => searchContext.setSearch(e.target.value)}
      />
      <ClearTags
        onClick={() => handleClickClear()}
        isDisplayed={!!searchContext.searchState}
      >
        Clear tags
      </ClearTags>
    </SearchWrapper>
  )
}

export default Search
