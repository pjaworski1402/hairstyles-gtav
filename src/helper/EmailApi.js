import React from "react"
import styled from "styled-components"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  label,
  textarea,
  button {
    margin: 10px 0;
  }
`

const EmailApi = ({ children, setStatus }) => {
  const url = `https://formspree.io/${process.env.GATSBY_EMAIL_API_KEY}`
  const submitForm = e => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setStatus("SUCCESS")
      } else {
        setStatus("ERROR")
      }
    }
    xhr.send(data)
  }
  return (
    <Form onSubmit={e => submitForm(e)} action={url} method="POST">
      {children}
    </Form>
  )
}
export default EmailApi
