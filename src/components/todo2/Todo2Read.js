import { useEffect, useState } from "react";
import { getTodo, removeTodo } from "../../api/todoAPI";

// 아예 비어오면 에러나오는걸 대비하기위해 빈껍데기 만들기
const ininState = {
    tno:0,
    title:''
}

const Todo2Read = ({target,changeView}) => {

    const [todo,setTodo] =useState(ininState)

    useEffect(()=>{
        getTodo(target).then(data => setTodo(data))
    },[target])

    const handleClickDel = async() =>{

        const {result} = await removeTodo(target)

        // {result:'success'}

        if(result === "success"){
            alert("삭제되었습니다.")
            
        }
        changeView("list")
        
    }



    return ( 
        <div>
            <div>Todo Read</div>
            <div>{target}</div>
            <div>{todo.tno}</div>
            <div>{todo.title}</div>
            <div className="flex p-4">
                <button className="m-2 p-2 border-2">MOD</button>
                <button className="m-2 p-2 border-2" onClick={handleClickDel}>DEL</button>
            </div>
        </div>
     );
}
 
export default Todo2Read;