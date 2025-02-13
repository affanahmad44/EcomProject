import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer"

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("44store");
    return localCartData ? JSON.parse(localCartData) : []; 
};


const initialState = {
    // cart :[],
    cart: getLocalCartData(),
    total_item: " ",
    total_price: " ",
    shipping_fee: 50000,
         
    }

const CartProvider = ({children}) => {
     
    const [state,dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, color, amount, product) => {
        dispatch({type: "ADD_TO_CART", payload:{id, color, amount, product} });

    }; 

    // Increment and decrement the product in cart
    const setDecrement = (id) => {
       dispatch({type: "SET_DECREMENT" , payload:id})
    };

    const setIncrement = (id) => {
        dispatch({type: "SET_INCREMENT" , payload:id})
    };

    // to remove the indivisual item from cart
    const removeItem = (id) => {
        dispatch({type: "REMOVE_ITEM", payload:id});
    }

    // to clear the cart 
    const clearCart = () => {
        dispatch({type: "CLEAR_CART"});

    }

    // to add the data in local storage
    // get vs set
    useEffect(() =>{
    //   dispatch({type: "CART_TOTAL_ITEM"});
    //   dispatch({type: "CART_TOTAL_PRICE"});
      dispatch({type: "CART_ITEM_PRICE_TOTAL"});

      localStorage.setItem("44store", JSON.stringify(state.cart));
    },[state.cart]);

    return <CartContext.Provider value={{...state, addToCart, removeItem, clearCart, setIncrement, setDecrement}}>
        {children}
    </CartContext.Provider>

};

 const useCartContext = () => {
    return useContext(CartContext);
 };

export { CartProvider, useCartContext };