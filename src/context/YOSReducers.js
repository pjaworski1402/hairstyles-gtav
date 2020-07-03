import { SWITCH_YOS } from "./types"

const switchYOS = (status, state) => {
  return {
    ...state,
    YOS: status,
  }
}

const reducers = (state, action) => {
  switch (action.type) {
    case SWITCH_YOS:
      return switchYOS(action.payload, state)

    default:
      return state
  }
}

export default reducers
