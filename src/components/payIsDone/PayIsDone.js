import React from "react"
import queryString from "query-string"
import styled from "styled-components"

import Overlay from "../overlay/Overlay"
import Title from "../title/Title"
import doneGif from "../../assets/images/done.gif"

const DoneImage = styled.img`
  height: 50%;
  margin: auto;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PayIsDone = () => {
  const parsed = queryString.parse(window.location.search)
  return (
    <Overlay title="Congratulations!">
      <Wrapper>
        <Title>
          Your hairstyles have been delivered to <b>{parsed.email}</b>
        </Title>
        <DoneImage src={doneGif} alt="done" />
      </Wrapper>
    </Overlay>
  )
}

export default PayIsDone
