import axios from "axios";
import { useEffect, useState } from "react";

const initState = {
    id: 0,
    pname: '',
    price: 0
}

const ProductDetail = ({ target, requestBuy }) => {
    // 에러를 안내기위한 초기설정값
    const [product, setProduct] = useState(initState)
    // 비동기는 무조건 useEffect
    useEffect(() => {

        console.log("useEffect.......", target)

        const id = target.pno

        if (id !== 0) {
            axios.get(`http://localhost:80/products/${id}`).then(res => {
                setProduct(res.data)
            })
        }

    }, [target])

    return (
        <div>
            <div>Product Detail</div>

            {product.id !== 0 ?
                <div>
                    <div>ID {product.id}</div>
                    <div>PNAME {product.pname}</div>
                    <div>PRICE {product.price}</div>

                </div> : <></>
            }
            <div>
                <button className="bg-red-500 text-white"
                    onClick={() => requestBuy(product)}
                >ADD Cart
                </button>
            </div>
        </div>
    );
}

export default ProductDetail;