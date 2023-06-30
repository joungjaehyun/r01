import { useEffect, useState } from "react";

const Cart = ({id,pname,price}) => {

    // 어제와 다른점 props가 들어온다.
    const [items, setItems] =useState([])

    console.log("Cart ",id, pname, price)

    useEffect(()=>{
        
        console.log("Cart useEffect......")
        // 아예없을때와 0일때는 안들어가게 해야되므로
        if(!id ||id === 0){
            return
        }
        setItems([...items,{id,pname,price, qty:1}])

    },[id,pname,price])

    return ( 
    <div>
        <div className="text-5xl">Cart</div>
        <div>
            <ul>
                {items.map( (cartItem,idx)=>
                    <li key={idx}>{cartItem.id} - {cartItem.pname} - {cartItem.price} - {cartItem.qty}</li>

                )}
            </ul>
        </div>

    </div> );
}
 
export default Cart;