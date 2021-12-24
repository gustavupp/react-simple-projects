
const reducer = (state, action) => {
    switch(action.type){
        case 'LOADING':
            return { ...state, isLoading: true }

        case 'DISPLAY_ITEMS':
            return {...state, cart: action.payload, isLoading: false}

        case 'CLEAR_CART':
            return {...state, cart: []}

        case 'ADD_ITEM':
            let tempCart = state.cart.map((item) => {
               if (item.id === action.payload) {
                   return { ...item, amount: item.amount + 1 }
               }
               return item;
            })
            return {...state, cart: tempCart}

        case 'REMOVE_ITEM':
            let tempCart1 = state.cart.map((item) => {
                if (item.id === action.payload){
                    return { ...item, amount: item.amount - 1 }
                }
                return item;
            })
            return {...state, cart: tempCart1}
        default:
            return new Error('there has been an error my friend, do not panic..')
    }

}

export default reducer;