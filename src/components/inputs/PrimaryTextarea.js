import React from "react"
import styled from "styled-components"

const Textarea = styled.textarea`
  width: 100%;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "24px")};
  font-family: roboto, sans-serif;
  font-weight: 100;
  padding: 15px 20px;
  border: none;
  border-radius: 20px;
  border: 1px solid black;
  border-radius: 20px;
  resize: none;
`

const PrimaryTextarea = ({ placeholder, onChange, fontSize }) => {
  return (
    <Textarea
      placeholder={placeholder}
      onChange={onChange}
      fontSize={fontSize}
      rows="4"
    />
  )
}

export default PrimaryTextarea
