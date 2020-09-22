import { SEARCH, ADD_TO_SEARCH } from "./types"

const setSearch = (text, state) => {
  const converted = text.replace(/,/g, " ").toLowerCase()
  return {
    ...state,
    search: converted,
  }
}

const addToSearch = (text, state) => {
  const value = state.search.length > 0 ? `${state.search} ${text}` : text
  return {
    ...state,
    search: value,
  }
}

const reducers = (state, action) => {
  switch (action.type) {
    case SEARCH:
      return setSearch(action.payload, state)
    case ADD_TO_SEARCH:
      return addToSearch(action.payload, state)
    default:
      return state
  }
}

export default reducers
