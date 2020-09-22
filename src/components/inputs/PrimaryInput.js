import React from "react"
import styled from "styled-components"

const Input = styled.input`
  border: 1px solid black;
  border-radius: 20px;
  width: ${({ width }) => (width ? width : "100%")};
  padding: 5px 20px;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "24px")};
  font-family: roboto, sans-serif;
  font-weight: 100;
  text-align: ${({ align }) => (align ? align : "center")};
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
    <Input
      width={width}
      placeholder={placeholder}
      onChange={onChange}
      fontSize={fontSize}
      align={align}
      name={name}
      type={type}
      value={value}
    />
  )
}

export default PrimaryInput
