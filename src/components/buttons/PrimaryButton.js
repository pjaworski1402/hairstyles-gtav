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

const PrimaryButton = ({ children, icon, onClick }) => {
  return (
    <StyledButton onClick={() => onClick()}>
      <ButtonIcon src={icon} alt="" />
      {children}
    </StyledButton>
  )
}

export default PrimaryButton
