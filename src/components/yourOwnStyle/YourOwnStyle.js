import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { StageOne, StageTwo, StageThree } from "./Stages"
import Overlay from "../overlay/Overlay"
import NextButton from "../buttons/PrimaryButton"
import imgurApi from "../../helper/ImgurApi"
import { removeQueryFromLink } from "../../helper/linkController"

const FormWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  textarea {
    margin: 50px 0;
  }
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
const ProgressCircle = styled.button`
  width: 20px;
  height: 20px;
  background-color: ${({ black }) => (black ? "black" : "white")};
  border: 1px solid black;
  border-radius: 50%;
  margin: 0 20px;
`

const YourOwnStyle = () => {
  const [file, setFile] = useState({ email: "", description: "", image: [] })
  const [status, setStatus] = useState(false)
  const [error, setError] = useState({ email: "", file: "" })
  const [stage, setStage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const numberOfStages = 3
  const renderProgressDots = () => {
    let dots = []
    for (let i = 1; i <= numberOfStages; i++) {
      dots.push(
        <ProgressCircle
          key={i}
          black={i === stage}
          onClick={() => setStage(i)}
          disabled={i === numberOfStages || stage === 1}
        />
      )
    }
    return dots
  }
  const stages = [
    <StageOne setFile={setFile} file={file} error={error} />,
    <StageTwo setFile={setFile} file={file} error={error} />,
    <StageThree />,
  ]
  const handleClickNextButton = () => {
    const { image, description, email } = file
    const regex = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/gm
    const mailIsCorect = regex.test(email)
    //check stage1
    if (stage === 1 && mailIsCorect) {
      setStage(stage + 1)
    } else if (stage === 1) {
      setError({ ...error, email: "The e-mail does not look correct" })
    }
    //check stage2
    if (stage === 2 && typeof image[0] !== "undefined") {
      try {
        imgurApi(image, description, email, setStatus)
        setIsLoading(true)
      } catch (err) {
        alert(err)
      }
    } else if (stage === 2) {
      setError({ ...error, file: "There is something wrong with your image" })
    }
  }
  //the end ... stage3
  useEffect(() => {
    if (status) {
      setStage(numberOfStages)
    }
  }, [status])

  return (
    <Overlay title="your own style">
      <FormWrapper>
        {stages[stage - 1]}
        <StageProgressWrapper>
          {stage !== numberOfStages && (
            <>
              {isLoading ? (
                "please wait..."
              ) : (
                <NextButton
                  disabled={isLoading}
                  onClick={() => handleClickNextButton()}
                  size="big"
                >
                  Next
                </NextButton>
              )}
              <ProgressCircleWrapper>
                {renderProgressDots()}
              </ProgressCircleWrapper>
            </>
          )}
        </StageProgressWrapper>
      </FormWrapper>
    </Overlay>
  )
}

export default YourOwnStyle
