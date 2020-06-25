import React from "react"
import styled from "styled-components"

const LastUpdateStyled = styled.div`
  text-align: right;
  padding: 30px 15px;
  font-weight: 200;
  font-size: 14px;
`

const LastUpdateDate = () => {
  return <LastUpdateStyled>Last update: 17.06.2020</LastUpdateStyled>
}

export default LastUpdateDate
