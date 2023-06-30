import { useState } from "react";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import Cart from "./Cart";

const Kiosk = () => {
    // 객체로 하는이유
    // 같은 글을 누를때 조회수 처리를 하려면 갱신이 되야되는데
    // 숫자면 아예 갱신이 안되버린다(useEffect가 일어나질않는다)
    // Component Base 객체지향과 비슷하다
    const [target, setTarget] =useState({pno:0})

    const requestViewProduct = (id) =>{
        console.log("requestViewProduct" + id)
        setTarget({pno:id})
    }
    //구매 버튼을 누를시 들어올 상품데이터
    const requestBuy=(product) =>{
        console.log("requestBuy...... ")
        console.log(product)
    }


    return (
        <div>
            <ProductList requestViewProduct={requestViewProduct}></ProductList>
            <ProductDetail target={target} requestBuy={requestBuy}></ProductDetail>
            <Cart></Cart>
        </div>
      );
}
 
export default Kiosk;