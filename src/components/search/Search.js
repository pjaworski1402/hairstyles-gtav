import React, { useContext } from "react"
import styled from "styled-components"

import LastUpdateDate from "../lastUpdateDate/LastUpdateDate"
import Input from "../inputs/PrimaryInput"
import { SearchContext } from "../../context/globalContext"

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
`

const Search = () => {
  const searchContext = useContext(SearchContext)
  return (
    <SearchWrapper>
      <LastUpdateDate />
      <Input
        placeholder="Search"
        width="35%"
        fontSize="20px"
        onChange={e => searchContext.setSearch(e.target.value)}
      />
    </SearchWrapper>
  )
}

export default Search
