import { useState } from "react";

const Counter2 = () => {
    
    const [obj, setObj]= useState({num:10})
    
    return (
        <div>
            {obj.num}
            <button onClick={()=>{
                obj.num+=1
                console.log(obj.num)
                // obj 내부의 num값만 바뀌고 obj 자체가 바뀌지 않았기 때문에 
                // re-rendering이 일어나지않는다.
                // 새로운객체를 만들어서 넣어줘야된다. 이방법도 좋은방법도 좋지않다.
                // 이를 대처하는게 spread operator
                // {} 새로운 메모리 주소할당
                // ... 객체를 전개해준다.
                setObj({...obj})

            }}>INC</button>
        </div>

    );
}

export default Counter2;