import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  background-color: #2753ff;
  padding: ${({ size }) => (size === "big" ? "16px 35px" : "12px 20px")};
  color: white;
  border: none;
  border-radius: 50px;
  display: flex;
  align-items: center;
  font-size: ${({ size }) => (size === "big" ? "16px" : "12px")};
  @media (min-width: 992px) {
    font-size: 18px;
    padding: 15px 25px;
  }
`

const ButtonIcon = styled.img`
  width: 20px;
  margin: 0;
  margin-right: 10px;
  @media (min-width: 992px) {
    width: 25px;
  }
`

const PrimaryButton = ({ children, icon, onClick, size, disabled }) => {
  return (
    <StyledButton
      onClick={() => onClick && onClick()}
      size={size}
      disabled={disabled}
    >
      {icon && <ButtonIcon src={icon} alt="" />}
      {children}
    </StyledButton>
  )
}

export default PrimaryButton
