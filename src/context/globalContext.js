import React, { createContext, useReducer } from "react"
import cartReducers from "./cartReducers"
import SearchReducers from "./SearchReducers"
import { ADD_ORDER, REMOVE_ORDER, SEARCH, ADD_TO_SEARCH } from "./types"

export const CartContext = createContext({
  orders: [],
  addOrder: order => {
    console.log("addOrder")
  },
  removeOrder: order => {
    console.log("removeOrder")
  },
})

export const SearchContext = createContext({
  search: "",
  setSearch: () => {
    console.log("setSearch")
  },
  addToSearch: () => {
    console.log("addToSearch")
  },
})

let initialState = { orders: [] }
if (
  typeof localStorage !== `undefined` &&
  JSON.parse(localStorage.getItem("orders"))
) {
  initialState = {
    orders: JSON.parse(localStorage.getItem("orders")).orders,
  }
} else {
  initialState = {
    orders: [],
  }
}

const initialSearchState = {
  search: "",
}

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducers, initialState)
  const [searchState, searchDispatch] = useReducer(
    SearchReducers,
    initialSearchState
  )

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

  const setSearch = text => {
    searchDispatch({
      type: SEARCH,
      payload: text,
    })
  }

  const addToSearch = text => {
    searchDispatch({
      type: ADD_TO_SEARCH,
      payload: text,
    })
  }

  return (
    <SearchContext.Provider
      value={{ searchState: searchState.search, setSearch, addToSearch }}
    >
      <CartContext.Provider
        value={{ state: state.orders, addOrder, removeOrder }}
      >
        {children}
      </CartContext.Provider>
    </SearchContext.Provider>
  )
}
