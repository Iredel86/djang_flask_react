import { useEffect, useState } from "react";
import MyCart from "./Components/MyCart";
import MyProds from "./Components/MyPords";
import { CartContext } from "./Contexts/CartContext";
import TotalDisplay from "./Components/TotalDisplay";

const App=() =>{
  const [cart,setCart] = useState([]);
  
  useEffect(()=> {
    // run everytime we buy any item
    // taking care (save/load from localstorage)
    if (cart.length > 0) localStorage.setItem('cart',JSON.stringify(cart)); // save my cart if not empty to localstorage
    const tempCart = localStorage.getItem("cart"); //read from locakstorage to temp variable
    if (tempCart){
      setCart(JSON.parse(tempCart)); //if tempCart not empty - save to cart
    };
  },[cart.length]);

  const clearCart = () => {
    localStorage.setItem("cart",JSON.stringify([]));
    setCart([]);
    console.clear();
  }

  return (
    <CartContext.Provider value = {{cart, setCart}}>
    <div style={{backgroundColor:"blueviolet", padding:"100px"}}>
    My Shop
    <MyProds></MyProds>
    <MyCart></MyCart>
    <button onClick={() => clearCart()}>Clear Cart</button>
    <TotalDisplay></TotalDisplay>
    </div>
    </CartContext.Provider>
  );
}

export default App;
