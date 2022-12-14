import React, { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";


const MyCart = () => {
    const {cart, setCart} = useContext(CartContext);
  
      return (
        <div style={{ backgroundColor: "white", padding: "100px" }}>
            MyCart
            {cart.map((prod, i) => (
                <div key={i}>
                    {i + 1}: - {prod.decs} price {prod.price}
                </div>


            ))}
          
        </div>
      );
    }
    
    export default MyCart;