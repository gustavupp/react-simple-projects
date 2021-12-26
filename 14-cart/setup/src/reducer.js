
const reducer = (state, action) => {
    switch(action.type){
        case 'LOADING':
            return { ...state, isLoading: true }

        case 'DISPLAY_ITEMS':
            return {...state, cart: action.payload, isLoading: false}

        case 'CLEAR_CART':
            return {...state, cart: []}

        case 'ADD_OR_REMOVE_ITEM':       
            let tempCart2 = state.cart.map((item) => {
                if (item.id === action.payload.id){
                    if (action.payload.type === 'ADD') return {...item, amount: item.amount + 1} 
                    if (action.payload.type === 'REMOVE') return {...item, amount: item.amount - 1}
                }
                return item;
            }).filter(item => item.amount !== 0) //after adding or removing the amount of items from the cart, it filter out items whose value is 0.
            return {...state, cart: tempCart2}
        
                case 'REMOVE_ITEM_BTN':
            return {...state, cart: action.payload}

            case 'UPDATE_TOTAL_AMOUNT':
                const { totalAmount, total } = state.cart.reduce((acc, curr) => {
                    const {amount, price} = curr;
                    acc.totalAmount += amount;
                    acc.total += (amount * parseFloat(price));
                    return acc
                }, {totalAmount: 0, total:0})
                
                return {...state, totalAmount, total: total.toFixed(2)}

            case 'GET_TOTAL_CART_VALUE':
                return {...state, total: action.payload}
                
        default:
            return new Error('there has been an error my friend, do not panic..')
    }

}

export default reducer;