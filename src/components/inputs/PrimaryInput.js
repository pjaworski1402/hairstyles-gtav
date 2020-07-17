import React from "react"
import styled from "styled-components"

const Label = styled.label`
  width: ${({ width }) => (width ? width : "100%")};
  margin: auto 0;
  border: 1px solid black;
  border-radius: 20px;
`

const Input = styled.input`
  width: 95%;
  margin-left: 5%;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "24px")};
  font-family: roboto, sans-serif;
  font-weight: 100;
  text-align: center;
  padding: 5px;
  border: none;
  border-radius: 20px;
`

const PrimaryInput = ({ placeholder, onChange, width, fontSize }) => {
  return (
    <Label width={width}>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        fontSize={fontSize}
      />
    </Label>
  )
}

export default PrimaryInput
