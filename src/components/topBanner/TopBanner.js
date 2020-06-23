import React from "react"
import styled from "styled-components"

import BackgroundSection from "./BackgroundSection"

const Title = styled.h1`
  color: white;
  margin: 0;
  padding: 15px 10%;
  text-align: center;
  font-size: 30px;
`
const Text = styled.div`
  text-align: center;
  color: white;
  padding: 10px;
`

const TopBanner = () => {
  return (
    <>
      <BackgroundSection>
        <Title>Create your dream style</Title>
        <Text>
          Have you been looking for hair for your GTA V character? Here you will
          find all hair types for men and women. If you haven't found your hair,
          you can also upload a photo of your hairstyle you are looking for.
        </Text>
      </BackgroundSection>
    </>
  )
}

export default TopBanner
