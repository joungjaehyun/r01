import { useState } from "react"

const Counter = () => {

    console.log("render-----------------------------")

    // hooks 
    // const 배열로 useState 시작값
    // 장점 : 각각의 컴포넌트들이 독립적으로 활용 가능하다.
    const [num, setNum] =useState(1)

    // parameter가 없다면 바로 onclick에 담아쓰면된다.
    const handleClick = (amount) =>{
    
        setNum(num+ amount)
        console.log("click", num)
    
    }
    // onClick에 줘야되는건 함수
    // handleClick(1)은 결과를 준것이므로 실행하고 실행이 되지않는다.
    return (  
        <div className=" w-full bg-blue-400 h-1/2 ">
            <div className=" text-5xl text-white ">
                {num}
            </div>
            <button 
            className=" bg-amber-400 text-red-800 font-bold "
            onClick={()=> {handleClick(1)}}
            >
                INC
            </button>
            <button 
            className=" bg-amber-400 text-red-800 font-bold ml-10"
            onClick={()=> {handleClick(-1)}}
            >
                DEC
            </button>
        </div>
    );
}
 
export default Counter;