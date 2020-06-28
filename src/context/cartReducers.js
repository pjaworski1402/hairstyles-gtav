import { ADD_ORDER } from "./types"

const addOrder = (order, state) => {
  const newOrders = [...state.orders, order]
  return {
    ...state,
    orders: newOrders,
  }
}

const reducers = (state, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return addOrder(action.payload, state)

    default:
      return state
  }
}

export default reducers
