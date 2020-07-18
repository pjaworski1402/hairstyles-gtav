const test = window.location.hash
const navs = [
  {
    name: "for woman",
    navTo: "?sex=woman",
  },
  {
    name: "for man",
    navTo: "?sex=man",
  },
  {
    name: "custom hair",
    type: "button",
    onClick: "yos",
  },
  {
    name: "instruction",
    type: "button",
    navTo: "/",
  },
  {
    name: "contact",
    type: "button",
    navTo: "/",
  },
]
export default navs
