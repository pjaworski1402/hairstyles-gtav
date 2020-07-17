import React from "react"
import styled from "styled-components"

import { FileDrop } from "react-file-drop"
import doneGif from "../../assets/images/done.gif"
import images from "../../assets/images/images.svg"
import EmailInput from "../inputs/PrimaryInput"

const StageTitle = styled.h2`
  font-size: 24px;
  font-weight: 100;
  font-family: Roboto, sans-serif;
  text-transform: uppercase;
  text-align: center;
`
const UploadImage = styled(FileDrop)`
  width: 100%;
  height: 60%;
  border: 1px dashed black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 24px;
  font-family: Roboto, sans-serif;
  font-weight: 100;
  text-align: center;
  .file-drop-target {
    display: flex;
    height: 50%;
    flex-direction: column;
    justify-content: space-evenly;
  }
`

const EmailText = styled.span`
  text-align: center;
  font-weight: 100;
  font-size: 14px;
`
const DoneImage = styled.img`
  width: 250px;
  height: 225px;
  margin: auto;
`
export const StageOne = ({ setFile }) => {
  return (
    <>
      <StageTitle>1. upload</StageTitle>
      <UploadImage
        onFrameDragEnter={event => console.log("onFrameDragEnter", event)}
        onFrameDragLeave={event => console.log("onFrameDragLeave", event)}
        onFrameDrop={event => console.log("onFrameDrop", event)}
        onDragOver={event => console.log("onDragOver", event)}
        onDragLeave={event => console.log("onDragLeave", event)}
        onDrop={(files, event) => console.log("onDrop!", files, event)}
      >
        {/* <input style={{ display: "none" }} type="file" /> */}
        <img src={images} alt="" />
        Drop your image here, or browse
      </UploadImage>
    </>
  )
}

export const StageTwo = ({ setEmail }) => {
  return (
    <>
      <StageTitle>2. enter e-mail</StageTitle>
      <EmailText>
        We will only use this email to let you know when your hair is ready
      </EmailText>
      <EmailInput
        onChange={e => setEmail(e.target.value)}
        placeholder="template@mail.com"
      />
    </>
  )
}

export const StageThree = () => {
  return (
    <>
      <StageTitle>
        3. And that's all.
        <br /> Wait for an email reply
      </StageTitle>
      <DoneImage src={doneGif} alt="doneGIF" />
    </>
  )
}
