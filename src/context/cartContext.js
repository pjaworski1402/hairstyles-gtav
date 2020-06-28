import React, { createContext, useReducer } from "react"
import cartReducers from "./cartReducers"
import { ADD_ORDER } from "./types"

export const CartContext = createContext({
  orders: [],
  addOrder: order => {
    console.log("addOrder")
  },
})

const initialState = {
  orders: ["test"],
}

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducers, initialState)

  const addOrder = order => {
    dispatch({
      type: ADD_ORDER,
      payload: {
        id: 21,
        content: "XD",
      },
    })
  }

  return (
    <CartContext.Provider value={{ state: state.orders, addOrder }}>
      {children}
    </CartContext.Provider>
  )
}
