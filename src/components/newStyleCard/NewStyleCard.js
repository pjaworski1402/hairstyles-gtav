import React from "react"
import styled from "styled-components"

import Card from "./BackgroundSection"

const StyledTitle = styled.h1`
  color: white;
  font-size: 30px;
  text-align: center;
`

const StyledContent = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 200;
  margin: 20px 15px;
`

const StyledButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  background-color: #f1f1f1;
  padding: 10px 15px;
  margin: 20px;
  font-size: 16px;
`

const NewStyleCard = () => {
  return (
    <Card>
      <StyledTitle>Didn't find your style?</StyledTitle>
      <StyledContent>
        Show us what creation you are looking for. We will try to make it for
        you!
      </StyledContent>
      <div style={{ textAlign: "center" }}>
        <StyledButton>Order now!</StyledButton>
      </div>
    </Card>
  )
}

export default NewStyleCard
