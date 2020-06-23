import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  background-color: #2753ff;
  padding: 12px 20px;
  color: white;
  border: none;
  border-radius: 50px;
  display: flex;
  align-items: center;
  font-size: 12px;
`

const PrimaryButton = ({ children, icon }) => {
  return (
    <StyledButton>
      <img
        src={icon}
        alt=""
        width="20px"
        style={{ margin: "0", marginRight: "10px" }}
      />
      {children}
    </StyledButton>
  )
}

export default PrimaryButton
