// 변수 선언을 컴포넌트 외에 선언하는 이유
// 컴포넌트 내에서 한다면, re-rendering을 할때마다 변수 자체도 계속해서 새로 생성되기때문
// 이를 방지하고자 변수를 외부에서 선언한다.

const products = [
    { pno: 1, pname: "Americano", price: 10000 },
    { pno: 2, pname: "Latte", price: 8000 },
    { pno: 3, pname: "Milk Tea", price: 4000 },
    { pno: 4, pname: "Green Tea", price: 2000 },
]

const Kiosk = () => {

    const handleClickBuy = (products) => {
        console.log(products)
    }

    return (
        <div className="w-full h-[100vh] bg-slate-600 flex">

            <div className="w-2/3 bg-white">
                <div className="text-4xl font-serif">Procucts</div>
                <ul>
                    {products.map(p =>
                        <li key={p.pno} className="text-2xl underline m-3 p-3 bg-rose-300"
                            onClick={() => { handleClickBuy(p) }}>
                            {p.pno} - {p.pname} - {p.price}
                            <button className="border-2 m-2 p-2 rounded-sm bg-orange-300">BUY</button>
                        </li>

                    )}
                </ul>
            </div>

            <div className="w-1/3">
                <div className="text-4xl font-serif">Cart</div>
            </div>

        </div>
    );
}

export default Kiosk;