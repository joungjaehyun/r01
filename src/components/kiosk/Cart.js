import { useState } from "react";

const Cart = ({id,pname,price}) => {

    // 어제와 다른점 props가 들어온다.
    const [Items, setItems] =useState([])

    console.log("Cart ",id, pname, price)

    return ( 
    <div>
        <div className="text-5xl">Cart</div>

    </div> );
}
 
export default Cart;