import React from "react"
import styled from "styled-components"

const Label = styled.label`
  width: ${({ width }) => (width ? width : "100%")};
  margin: auto 0;
  border: 1px solid black;
  border-radius: 20px;
`

const Input = styled.input`
  /* width: 95%; */
  /* margin-left: 5%; */
  /* padding: 5px; */
  width: 100%;
  padding: 5px 20px;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "24px")};
  font-family: roboto, sans-serif;
  font-weight: 100;
  text-align: ${({ align }) => (align ? align : "center")};
  border: none;
  border-radius: 20px;
`

const PrimaryInput = ({
  placeholder,
  onChange,
  width,
  fontSize,
  align,
  name,
  type,
  value,
}) => {
  return (
    <Label width={width}>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        fontSize={fontSize}
        align={align}
        name={name}
        type={type}
        value={value}
      />
    </Label>
  )
}

export default PrimaryInput
