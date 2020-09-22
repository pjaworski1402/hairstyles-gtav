<<<<<<< HEAD
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
=======
import offers from "../content/offers"

const find = search => {
  const searchTags = search.split(" ")
  const finded = []
  const category = () => {
    if (searchTags.includes("man") || searchTags.includes("men")) {
      return offers.man
    }
    if (searchTags.includes("woman") || searchTags.includes("women")) {
      return offers.woman
    } else return [...offers.man, ...offers.woman]
  }
  category().forEach(offer => {
    const { tags } = offer
    let including = 0
    tags.forEach(tag => {
      if (searchTags.includes(tag)) {
        including++
      }
    })
    if (searchTags.length === including) {
      finded.push(offer)
    }
>>>>>>> 7f23e4f984630e23292383c7f6d10974f0f73d75
  })
  return finded
}
export default find
