import React, { useState } from "react"
import styled from "styled-components"

import { FileDrop } from "react-file-drop"
import doneGif from "../../assets/images/done.gif"
import images from "../../assets/images/images.svg"
import Input from "../inputs/PrimaryInput"
import Textarea from "../inputs/PrimaryTextarea"

const StageTitle = styled.h2`
  font-size: 24px;
  font-weight: 100;
  font-family: Roboto, sans-serif;
  text-transform: uppercase;
  text-align: center;
`
const PreviewImage = styled.img`
  max-width: 80%;
  max-height: 20%;
  margin: 0 auto;
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
  height: 50%;
  margin: auto;
`
const StyledLabelBrowse = styled.label`
  color: #2753ff;
  font-weight: 700;
  cursor: pointer;
`
const DeleteImageButton = styled.button`
  align-self: center;
  background-color: transparent;
  border: none;
  color: #2753ff;
  font-weight: 700;
  font-size: 18px;
  text-decoration: underline;
`

export const StageTwo = ({ setFile, file, error }) => {
  const [imageInQueue, setImageInQueue] = useState("")
  const handleChange = (data, type, event) => {
    switch (type) {
      case "file":
        if (!data[0].type.includes("image")) {
          return 0
        }
        setImageInQueue(URL.createObjectURL(data[0]))
        return setFile({ ...file, image: data })
      case "description":
        return setFile({ ...file, description: data })
      default:
        break
    }
  }
  const handleDeleteImage = () => {
    setImageInQueue()
    return setFile({ ...file, image: {} })
  }
  return (
    <>
      <StageTitle>2. upload</StageTitle>
      {imageInQueue ? (
        <>
          <PreviewImage src={imageInQueue} alt="" />
          <DeleteImageButton onClick={() => handleDeleteImage()}>
            Delete
          </DeleteImageButton>
        </>
      ) : (
        <UploadImage
          className="uploadImage"
          // onFrameDragEnter={event => {}}
          // onFrameDragLeave={event => {}}
          // onFrameDrop={event => {}}
          onDragOver={event => {
            const dropArea = document.querySelector(".uploadImage")
            dropArea.style.border = "2px solid #2753ff"
            dropArea.style.backgroundColor = "rgba(0,0,0,.1)"
          }}
          onDragLeave={event => {
            const dropArea = document.querySelector(".uploadImage")
            dropArea.style.border = "1px dashed black"
            dropArea.style.backgroundColor = "transparent"
          }}
          onDrop={(files, event) => handleChange(files, "file", event)}
        >
          <img src={images} alt="" />
          Drop your image here, or
          <StyledLabelBrowse>
            browse
            <input
              type="file"
              style={{ display: "none" }}
              accept="image/*"
              onChange={e => handleChange([e.target.files[0]], "file")}
            />
          </StyledLabelBrowse>
        </UploadImage>
      )}

      <Textarea
        onChange={e => handleChange(e.target.value, "description")}
        placeholder="Description"
      />
      {error.file.length > 0 && error.file}
    </>
  )
}

export const StageOne = ({ setFile, file, error }) => {
  const handleChange = data => {
    setFile({ ...file, email: data })
  }
  return (
    <>
      <StageTitle>1. enter e-mail</StageTitle>
      <EmailText>
        We will only use this email to let you know when your hair is ready
      </EmailText>
      <Input
        onChange={e => handleChange(e.target.value.toLowerCase())}
        value={file.email}
        placeholder="template@mail.com"
      />
      {error.email.length > 0 && error.email}
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
