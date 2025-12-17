export const initialState = {
    items: [],
}

const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const existingItem = state.items.find((item) => item.id === action.payload.id);

            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map((item) => {
                        return item.id === action.payload.id ?
                            { ...item, quantity: item.quantity + 1 }
                            : item;
                    })
                }
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, quantity: 1 }],
                }
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload.id)
            };
        case "INCREMENT_CART_QUANTITY":
            return {
                ...state,
                items: state.items.map((item) => {
                    return item.id === action.payload.id ?
                        { ...item, quantity: item.quantity + 1 }
                        : item;
                }),
            };
        case "DECREMENT_CART_QUANTITY": {
            const itemToDecrement = state.items.find(
                item => item.id === action.payload.id
            );

            if (!itemToDecrement) return state;

            if (itemToDecrement.quantity > 1) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    )
                };
            }
            return {
                ...state,
                items: state.items.filter(
                    item => item.id !== action.payload.id
                )
            };
        }
        default:
            return state
    }
}

export default CartReducer;