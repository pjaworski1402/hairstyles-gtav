import { SEARCH, ADD_TO_SEARCH, REMOVE_FROM_SEARCH } from "./types"

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

const removeFromSearch = (text, state) => {
  const value = state.search
    .replace(`${text} `, "")
    .replace(` ${text}`, "")
    .replace(text, "")
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
    case REMOVE_FROM_SEARCH:
      return removeFromSearch(action.payload, state)
    default:
      return state
  }
}

export default reducers
