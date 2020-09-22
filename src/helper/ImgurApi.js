const imgurApi = (image, description, email, setStatus) => {
  const file = image[0]
  const fd = new FormData()
  fd.append("image", file)
  fd.append("title", email)
  fd.append("album", process.env.Gatsby_IMGUR_DELETEHASH)
  fd.append("description", description)
  const xhr = new XMLHttpRequest()
  xhr.open("POST", "https://api.imgur.com/3/image.json")
  xhr.onload = () => {
    const link_src = JSON.parse(xhr.responseText)
    setStatus(link_src.success)
  }
  xhr.setRequestHeader(
    "Authorization",
    `Client-ID ${process.env.Gatsby_IMGUR_CLIENT_ID}`
  )
  xhr.send(fd)
}
export default imgurApi
