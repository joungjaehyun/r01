//통신의 중앙지점

import { useState } from "react"
import ZProductList from "./ZProductList"
import ZCart from "./ZCart"

//시작점
const ZKiosk = () => {
    
    // Cart에 보내줄 배열 생성
    const [items, setItems]= useState([])

    // 함수는 선언시 console로 적용되는지
    // 논리 작성전 확인해준다.
    // ProductList로 내려줄 함수들
    const buyProduct = (product) => {
        // 시작할떄 console만찍어본다
        console.log("buy product" , product)

    }
    const viewProduct = () => {
        console.log("view product")
    }
    // Cart에서 보내줄 기능 
    const changeQty = () =>{
        console.log("changeQty")
    }

    return (
    <>
        <ZProductList buyProduct={buyProduct} viewProduct={viewProduct}></ZProductList>
        <ZCart arr={items} changeQty={changeQty}></ZCart>
    </> 
     );
}
 
export default ZKiosk;