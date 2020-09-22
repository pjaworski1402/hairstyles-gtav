// import offers from "../content/offers"

const find = (search, offers) => {
  const searchTags = search.split(" ")
  const finded = []
  // const category = () => {
  //   if (searchTags.includes("man") || searchTags.includes("men")) {
  //     return offers.man
  //   }
  //   if (searchTags.includes("woman") || searchTags.includes("women")) {
  //     return offers.woman
  //   } else return [...offers.man, ...offers.woman]
  // }
  // category().forEach(offer => {
  //   const { tags } = offer
  //   let including = 0
  //   tags.forEach(tag => {
  //     if (searchTags.includes(tag)) {
  //       including++
  //     }
  //   })
  //   if (searchTags.length === including) {
  //     finded.push(offer)
  //   }
  // })
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
