import React, { createContext, useReducer } from "react"
import cartReducers from "./cartReducers"
import { ADD_ORDER, REMOVE_ORDER } from "./types"

export const CartContext = createContext({
  orders: [],
  addOrder: order => {
    console.log("addOrder")
  },
  removeOrder: order => {
    console.log("removeOrder")
  },
})

const initialState = {
  orders: [],
}

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducers, initialState)

  const addOrder = order => {
    dispatch({
      type: ADD_ORDER,
      payload: order,
    })
  }
  const removeOrder = order => {
    dispatch({
      type: REMOVE_ORDER,
      payload: order,
    })
  }

  return (
    <CartContext.Provider
      value={{ state: state.orders, addOrder, removeOrder }}
    >
      {children}
    </CartContext.Provider>
  )
}
