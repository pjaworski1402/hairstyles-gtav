import React, { useState } from "react"
import styled from "styled-components"

import { StageOne, StageTwo, StageThree } from "./Stages"
import Overlay from "../overlay/Overlay"
import NextButton from "../buttons/PrimaryButton"

const FormWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`
const StageProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  justify-content: space-between;
  height: 20%;
`
const ProgressCircleWrapper = styled.div`
  display: flex;
`
const ProgressCircle = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ black }) => (black ? "black" : "white")};
  border: 1px solid black;
  border-radius: 50%;
  margin: 0 20px;
`

const YourOwnStyle = () => {
  const [file, setFile] = useState("")
  const [email, setEmail] = useState("")
  const [stage, setStage] = useState(1)
  const numberOfStages = 3
  const renderProgressDots = () => {
    let dots = []
    for (let i = 1; i <= numberOfStages; i++) {
      dots.push(<ProgressCircle key={i} black={i === stage} />)
    }
    return dots
  }
  const stages = [
    <StageOne setFile={setFile} />,
    <StageTwo setEmail={setEmail} />,
    <StageThree />,
  ]
  // Close overlay when stages is end
  // stage > numberOfStages && context.switchYOS(false)

  return (
    <Overlay title="your own style">
      <FormWrapper>
        {stages[stage - 1]}
        <StageProgressWrapper>
          <NextButton onClick={() => setStage(stage + 1)} size="big">
            {stage === numberOfStages ? "Back to site" : "Next"}
          </NextButton>
          <ProgressCircleWrapper>{renderProgressDots()}</ProgressCircleWrapper>
        </StageProgressWrapper>
      </FormWrapper>
    </Overlay>
  )
}

export default YourOwnStyle
