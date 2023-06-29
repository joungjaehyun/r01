import { useState } from "react";
import TodoInput from "./TodoInput";

const initState = {title:'',content:''}




const TODO = () => {

    const [obj, setObj] = useState(initState)
    const handleChange = (e)=>{
      
        obj[e.target.name]=e.target.value
 
        setObj({...obj})
     }
     const handleShow = ()=>{
         console.log(obj)
     }
     const handleClear = () =>{
         setObj({...initState})
     }
 

    return ( 
        <>
        <TodoInput obj={initState} handleChange={handleChange} handleShow={handleShow} handleClear={handleClear}></TodoInput>
        </>
     );
}
 
export default TODO;