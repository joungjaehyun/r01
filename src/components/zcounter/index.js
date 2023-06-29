import { useState } from "react";
import ZCountPanel from "./ZCountPanel";
import ZCountDisplay from "./ZCountDisplay";

//Container Component
const ZCounter = () => {

    // 여러개의 props를 전달해줄때 => 구조분해 할당해서 보내준다 또는 {...target}
    const target ={
        p1:'A',
        p2:'B',
        p3:'C',
        p4:'D'
    }

    const [obj, setObj] = useState({ num: 10 })

    const changeObj = (amount) => {

        obj.num += amount
        setObj({ ...obj })
    }

    return (
        <div>
            {/* 하위 component에 함수또는 값전달 */}

            <ZCountDisplay value={obj.num} />
            <ZCountPanel fn={changeObj} />
        </div>
    );
}

export default ZCounter;