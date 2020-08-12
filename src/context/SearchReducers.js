import { SEARCH } from "./types"

const setSearch = (text, state) => {
  const converted = text.replace(/,/g, " ").toLowerCase()
  return {
    ...state,
    search: converted,
  }
}

const reducers = (state, action) => {
  switch (action.type) {
    case SEARCH:
      return setSearch(action.payload, state)

    default:
      return state
  }
}

export default reducers
