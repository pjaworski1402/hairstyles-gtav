import React from "react"
import styled from "styled-components"

import BackgroundSection from "./BackgroundSection"

const Title = styled.h1`
  color: white;
  margin: 0;
  padding: 5vw 10%;
  text-align: center;
  font-size: 30px;
  text-shadow: 0 0 15px black;
  @media (min-width: 992px) {
    font-size: 48px;
  }
`
const Text = styled.div`
  text-align: center;
  color: white;
  text-shadow: 0 0 5px black;
  padding: 5vw;
  font-size: 14px;
  @media (min-width: 992px) {
    font-size: 24px;
  }
`

const TopBanner = () => {
  return (
    <>
      <BackgroundSection>
        <Title>Create your dream style</Title>
        <Text>
          Have you been looking for hair for your GTA V character? Here you will
          find all hair types for men and women. If you haven't found yet your
          hair, you can upload a photo of hairstyle you are looking for.
        </Text>
      </BackgroundSection>
    </>
  )
}

export default TopBanner
