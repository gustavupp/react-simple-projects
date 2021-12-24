import React, { useState, useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  isLoading: false,
  cart : [],
  total: 0,
  totalAmount: 0
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: 'DISPLAY_ITEMS', payload: data })
  }

  //clear cart function
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  }

  const removeItemBtn = (id) => {
    const newCart = state.cart.filter((item) => item.id !== id)
    dispatch({ type: 'REMOVE_ITEM_BTN', payload: newCart })
  }

  //add amount of each clicked item
  const addItem = (id) => {
    dispatch({ type: 'ADD_ITEM', payload: id});
  }

  //decrease the amount of each clicked item
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id});
  }

  //fetch the data from the API on the first rendering.
  useEffect(() => {
    fetchData();
  },[])

  return (
    <AppContext.Provider
      value={{...state,
         cart: state.cart,
          clearCart,
          total: state.total,
          totalAmount: state.totalAmount, 
          addItem,
          removeItem
        }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
