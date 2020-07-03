import React, { useContext } from "react"
import styled from "styled-components"

import { YOSContext } from "../../context/globalContext"
import Card from "./BackgroundSection"

const StyledTitle = styled.h1`
  color: white;
  font-size: 30px;
  text-align: center;
`

const StyledText = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 200;
  margin: 5vw 15px;
  @media (min-width: 992px) {
    text-align: center;
    font-size: 24px;
  }
`

const StyledButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  background-color: #f1f1f1;
  padding: 10px 15px;
  margin: 20px;
  font-size: 16px;
  font-weight: 600;
  @media (min-width: 992px) {
    padding: 15px 30px;
    font-size: 18px;
  }
`

const NewStyleCard = () => {
  const context = useContext(YOSContext)
  return (
    <Card>
      <StyledTitle>Didn't find your style?</StyledTitle>
      <StyledText>
        Show us what creation you are looking for. We will try to make it for
        you!
      </StyledText>
      <div style={{ textAlign: "center" }}>
        <StyledButton onClick={() => context.switchYOS(true)}>
          Order now!
        </StyledButton>
      </div>
    </Card>
  )
}

export default NewStyleCard
