import axios from "axios";
import { useEffect, useState } from "react";

const ProductList = ({requestViewProduct}) => {

    const [obj,setObj] = useState([])

    console.log(obj)
    // use Effect
    // 뒤에조건이 빈배열이면 처음 렌더링이 끝났을때 일어나는 것
    useEffect(() =>{
        // useEffect는 async await로는 못한다.
        axios.get('http://localhost/products').then(res=>{
            console.log("effect inside" + res.data)
            setObj(res.data) // useEffect에 안들어가면 무한 맥시멈이 걸린다.
        })
    },[])
    if(obj.length===0){
        return(
            <div className="text-4xl">Loading...........................</div>
        )
    }
   

    return (  
        <ul>
            {obj.map(p=><li key={p.id}
            onClick={()=>requestViewProduct(p.id)}
            >
                {p.id}  - {p.pname} - {p.price}
            </li>)}
        </ul>
    );
}
 
export default ProductList;