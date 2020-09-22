const find = (search, offers) => {
  const searchTags = search.split(" ")
  const finded = []
  offers.forEach(offer => {
    const { tags } = offer
    let including = 0
    tags.forEach(({ tagName }) => {
      if (searchTags.includes(tagName)) {
        including++
      }
      if (searchTags.length === including) {
        finded.push(offer)
      }
    })
  })
  return finded
}
export default find
