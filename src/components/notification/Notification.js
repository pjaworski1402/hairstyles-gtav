import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const Notification = styled.div`
  background-color: rgba(152, 251, 152, 0.25);
  color: black;
  font-family: Roboto, sans-serif;
  width: 20%;
  height: 10%;
  position: fixed;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 40%;
  left: 40%;
`

export default Notification
