import React, { useState } from "react"
import styled from "styled-components"

import Overlay from "../overlay/Overlay"
import instaIco from "../../assets/images/instagram.svg"
import discordIco from "../../assets/images/discord.svg"
import Input from "../inputs/PrimaryInput"
import Textarea from "../inputs/PrimaryTextarea"
import Email from "../../helper/EmailApi"
import Button from "../buttons/PrimaryButton"

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

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
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
  const [status, setStatus] = useState({})
  return (
    <Overlay title="contact">
      <ContactWrapper>
        <ContactData>
          E-mail:&nbsp;<b>hairstyles.gta5@gmail.com</b>
        </ContactData>
        <StyledLink
          target="_blank"
          rel="noopener"
          href="https://www.instagram.com/hairstyles_gta_v/"
        >
          <ContactData>
            Instagram&nbsp;
            <StyledInstagramIco src={instaIco} />
          </ContactData>
        </StyledLink>
        <StyledLink
          target="_blank"
          rel="noopener"
          href="https://discord.com/invite/u4AdR9m"
        >
          <ContactData>
            Discord&nbsp;
            <StyledInstagramIco src={discordIco} />
          </ContactData>
        </StyledLink>
        <StyledLine />
        <ContactData>Send me question here:</ContactData>
        <ContactData>
          <Email setStatus={setStatus} status={status}>
            <Input placeholder="E-mail to request" align="left" name="email" />
            <Textarea placeholder="Text" name="message" />
            {status === "SUCCESS" ? <p>Thanks!</p> : <Button>Submit</Button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </Email>
        </ContactData>
        <StyledLine />
        <ContactData>Site created by Piotr Jaworski</ContactData>
      </ContactWrapper>
    </Overlay>
  )
}

export default Contact
