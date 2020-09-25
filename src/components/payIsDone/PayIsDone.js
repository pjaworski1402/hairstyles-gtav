import React from "react"
import queryString from "query-string"
import styled from "styled-components"

import Overlay from "../overlay/Overlay"
import Title from "../title/Title"
import doneGif from "../../assets/images/done.gif"
import sad from "../../assets/images/sad.gif"

const DoneImage = styled.img`
  height: 50%;
  margin: auto;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const statusString = {
  done: "done",
  error: "error",
  cancel: "cancel",
}

const PayIsDone = ({ status }) => {
  const parsed = queryString.parse(window.location.search)

  if (status === statusString.done) {
    localStorage.removeItem("orders")
  }

  return (
    <Overlay
      title={
        status === statusString.done
          ? "Congratulations!"
          : status === statusString.cancel
          ? "Canceled!"
          : "Something went wrong"
      }
    >
      <Wrapper>
        <Title>
          {status === statusString.done ? (
            <>
              Your hairstyles have been delivered to
              <b>{parsed.email}</b>
            </>
          ) : (
            <>The order has not been placed</>
          )}
        </Title>
        <DoneImage
          src={status === statusString.done ? doneGif : sad}
          alt="done"
        />
      </Wrapper>
    </Overlay>
  )
}

export default PayIsDone
