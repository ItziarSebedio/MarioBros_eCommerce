import { CartProduct } from "../interface"

export interface CartState{
    cartItems: CartProduct[]
}

export const initialState:CartState = {
    //la data debe ser la misma que estamos agregadno en el componente
    cartItems:[]
}

export interface CartAction{
    type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "CLEAR_CART"
    payload: CartProduct
}

export const cartReducer = (state:CartState, action:CartAction): CartState => {
    
    switch(action.type){

        case "ADD_TO_CART": {
            const { id } = action.payload

            //Validar si el item ya existe en el carrito, true o false
            const existingItem = state.cartItems.find((item) => item.id === id)

            if (existingItem){
                return {
                    ...state,
                    //Tenemos que buscar en cartItems el id que ya sabemos que existe e incrementarle su cantidad en 1
                    cartItems: state.cartItems.map((item) => item.id === id ? {...existingItem, quantity: existingItem.quantity + 1} : item )
                }
            } else {
                //Si el item no existe en el carrito, hay que agregarlo
                return{
                    ...state, //copiamos el estado
                    cartItems: [...state.cartItems, action.payload]
                }
            }

        }

        case "REMOVE_FROM_CART":{
            const {id: removeItemID} = action.payload
            //Validar si el item ya existe en el carrito, true o false
            const itemToRemove = state.cartItems.find((item) => item.id === removeItemID)

            if(itemToRemove){
                if(itemToRemove.quantity === 1){
                    return{
                        ...state,
                        cartItems: state.cartItems.filter((item) => item.id !== removeItemID)
                        //El item.id que sea diferente a removeItemID lo volvemos amandar al carrito; el que sea igual es el que vamos a excluir
                    }
                }else{
                    return{
                        ...state,
                        cartItems: state.cartItems.map((item) => item.id === removeItemID ? {...itemToRemove, quantity: itemToRemove.quantity -1} : item )
                    }
                }
            }
            return state;
        }

        case "CLEAR_CART":{
            return{
                ...state,
                cartItems:[]
            }
        }
        
        default: 
        return state;
    }
}