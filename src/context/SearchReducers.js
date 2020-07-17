import { SEARCH } from "./types"

const setSearch = (text, state) => {
  return {
    ...state,
    search: text,
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
