import {useState } from "react";
import { cartContext } from "./cartContext";

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addItem = (item, quantity) => {
        let newCart;
        let product = cart.find(prod => prod.id === item.id );
        if(product){
            product.quantity += quantity;
            newCart = [...cart];
        }else {
            product = {...item, quantity: quantity}
            newCart = [...cart, product];
        }
        setCart(newCart);
    };
    console.log(cart);
    const clear = () => {
        setCart([]);
    };

    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id));
    };

    const changeQuantity = (id, quantity) => {
        let product = cart.find(prod => prod.id === id );
        product.quantity = quantity;
        setCart([...cart]);
    };

    return <cartContext.Provider value={{cart, setCart, addItem, clear, removeItem, changeQuantity}}>{children}</cartContext.Provider>
} 

export default CartProvider;