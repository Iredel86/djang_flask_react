import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Contexts/CartContext";
import axios from "axios";

const MyProds = () => {
    const {cart, setCart} = useContext(CartContext);
    // const MY_SERVER = "http://localhost:3005/prods"
    // const MY_SERVER = "http://127.0.0.1:5000/newprod" //flask (python -flask)
    const MY_SERVER = "http://127.0.0.1:8000/products" //flask (python -django)
    const [myProds, setmyProds] = useState([])
    useEffect (()=>{
      axios.get(MY_SERVER).then((r) => setmyProds(r.data));
    },[]);


    return (
      <div style={{backgroundColor: "green", padding: "100px"}}>
        MyProds:
        <br></br>
        {myProds.length}
        {myProds.map((prod,i) =>
        (<button onClick={()=>setCart([...cart, prod])}>{prod.desc}</button>))
        }

        

      </div>
    );
  }
  
  export default MyProds;