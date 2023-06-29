import { useState } from "react";


let tno =1;


const TodoInput = ({obj,handleChange,handleClear,handleShow}) => {


   
    return (
        <>

            <div>
                <label>제목</label>
                <input className="border-8"
                    type="text" 
                    name='title'
                    value={obj.title}
                    onChange={ handleChange} />
            </div>
            <div>     
                <label>내용</label>
                <input className="border-8"
                    type="text"
                    name='content'
                    value={obj.content}
                    onChange={handleChange} />
           
           </div>
           <div>
            <button onClick={handleShow}>SHOW</button>
            <button onClick={handleClear}>CLEAR</button>
           </div>
            {/* 입력창이 1개일때 */}
            {/* <input className="border-8"
            type="text" 
            value={value}
            onChange={e=> setValue(e.target.value)}/> */}
        </>
    );
}

export default TodoInput;