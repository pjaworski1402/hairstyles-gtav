import React, { createContext, useReducer } from "react"
import cartReducers from "./cartReducers"
import YOSReducers from "./YOSReducers"
import SearchReducers from "./SearchReducers"
import { ADD_ORDER, REMOVE_ORDER, SWITCH_YOS, SEARCH } from "./types"

export const CartContext = createContext({
  orders: [],
  addOrder: order => {
    console.log("addOrder")
  },
  removeOrder: order => {
    console.log("removeOrder")
  },
})

export const YOSContext = createContext({
  YOS: false,
  switchYOS: () => {
    console.log("removeOrder")
  },
})

export const SearchContext = createContext({
  search: "",
  setSearch: () => {
    console.log("setSearch")
  },
})

const initialState = {
  orders: [],
}

const initialYOSState = {
  YOS: false,
}

const initialSearchState = {
  search: "",
}

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducers, initialState)
  const [YOSstate, YOSdispatch] = useReducer(YOSReducers, initialYOSState)
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
  const switchYOS = status => {
    YOSdispatch({
      type: SWITCH_YOS,
      payload: status,
    })
  }

  const setSearch = text => {
    searchDispatch({
      type: SEARCH,
      payload: text,
    })
  }

  return (
    <SearchContext.Provider
      value={{ searchState: searchState.search, setSearch }}
    >
      <CartContext.Provider
        value={{ state: state.orders, addOrder, removeOrder }}
      >
        <YOSContext.Provider value={{ stateYOS: YOSstate.YOS, switchYOS }}>
          {children}
        </YOSContext.Provider>
      </CartContext.Provider>
    </SearchContext.Provider>
  )
}
