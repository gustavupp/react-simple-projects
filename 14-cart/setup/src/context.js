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

  //fetch the data from the API on the first rendering.
  useEffect(() => {
    fetchData();
  },[])


  //fecth data function
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

  //removes the selected item from the cart
  const removeItemBtn = (id) => {
    const newCart = state.cart.filter((item) => item.id !== id)
    dispatch({ type: 'REMOVE_ITEM_BTN', payload: newCart })
  }

  //single call for decreasing or increasing the amount of the same items in the cart
  const addOrRemoveItem = (id, type) => {
    dispatch({ type: 'ADD_OR_REMOVE_ITEM', payload: { id, type } })
  }

  //updates the total amount of items and total Value amount in the cart every time the cart changes
  useEffect(() => {
      dispatch({ type: 'UPDATE_TOTAL_AMOUNT'})
  },[state.cart])
  

  return (
    <AppContext.Provider
      value={{...state,
         cart: state.cart,
          clearCart,
          total: state.total,
          totalAmount: state.totalAmount, 
          removeItemBtn,
          addOrRemoveItem
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
