import React, { useContext } from "react"
import styled from "styled-components"
import queryString from "query-string"

import Input from "../inputs/PrimaryInput"
import { SearchContext } from "../../context/globalContext"
import offers from "../../content/offers"
import Button from "../buttons/PrimaryButton"
import backArrow from "../../assets/images/back.svg"

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
`
const LastUpdateStyled = styled.div`
  font-weight: 200;
  font-size: 14px;
`

const Search = () => {
  const searchContext = useContext(SearchContext)
  return (
    <SearchWrapper>
      {queryString.parse(window.location.search).group ? (
        <Button isLink to="/" icon={backArrow}>
          Back
        </Button>
      ) : (
        <>
          <LastUpdateStyled>Last update: {offers.date}</LastUpdateStyled>
          <Input
            placeholder="Search"
            width="35%"
            fontSize="20px"
            value={searchContext.searchState}
            onChange={e => searchContext.setSearch(e.target.value)}
          />
        </>
      )}
    </SearchWrapper>
  )
}

export default Search
