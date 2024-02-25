import { useReducer, FC, ReactNode } from "react"
import { cartReducer, initialState } from "./cartReducer"
import { CartContext } from "./CartContext"

interface CartProviderProps{
    children: ReactNode;
}

export const CartProvider:FC<CartProviderProps> = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initialState)

    return(

        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}