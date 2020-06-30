import { ADD_ORDER, REMOVE_ORDER } from "./types"

const addOrder = (order, state) => {
  const newOrders = [...state.orders, order]
  return {
    ...state,
    orders: newOrders,
  }
}

const removeOrder = (id, state) => {
  const orders = state.orders
  const index = orders.indexOf(orders.find(order => order.id === id))
  if (index > -1) {
    orders.splice(index, 1)
  }
  return {
    ...state,
    orders: orders,
  }
}

const reducers = (state, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return addOrder(action.payload, state)

    case REMOVE_ORDER:
      return removeOrder(action.payload, state)

    default:
      return state
  }
}

export default reducers
