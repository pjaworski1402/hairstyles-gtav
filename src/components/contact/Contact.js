import React, { useState } from "react"
import styled from "styled-components"

import Overlay from "../overlay/Overlay"
import instaIco from "../../assets/images/instagram.svg"
import Input from "../inputs/PrimaryInput"
import Textarea from "../inputs/PrimaryTextarea"

const ContactWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  height: 85%;
  justify-content: space-between;
  padding: 0;
`
const ContactData = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  font-size: 24px;
  font-family: roboto, "sans-serif";
  font-weight: 100;
  @media (min-width: 992px) {
    margin: 0 30%;
  }
`

const StyledInstagramIco = styled.img`
  width: 35px;
`

const StyledLine = styled.li`
  list-style: none;
  height: 1px;
  width: 100%;
  background-color: #b0b0b0;
  @media (min-width: 992px) {
    width: 50%;
    margin: 0 auto;
  }
`

const Contact = () => {
  const [email, setEmail] = useState()
  const [text, setText] = useState()
  return (
    <Overlay title="contact">
      <ContactWrapper>
        <ContactData>
          E-mail:&nbsp;<b>xyz@gmail.com</b>
        </ContactData>
        <ContactData>
          Instagram&nbsp;
          <StyledInstagramIco src={instaIco} />
        </ContactData>
        <StyledLine />
        <ContactData>Send me question here:</ContactData>
        <ContactData>
          <Input
            placeholder="E-mail to request"
            align="left"
            onChange={e => setEmail(e.target.value)}
          />
        </ContactData>
        <ContactData>
          <Textarea
            placeholder="Text"
            onChange={e => setText(e.target.value)}
          />
        </ContactData>
        <StyledLine />
        <ContactData>Site created by Piotr Jaworski</ContactData>
      </ContactWrapper>
    </Overlay>
  )
}

export default Contact
