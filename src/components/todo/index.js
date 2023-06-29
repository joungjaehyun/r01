import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TemplatePage from "../layout/TemplatePage";




// Todo Index 생성
const TODO = () => {
     const [todoArr, setTodoArr] =useState([])

    const addTodo= (newTodo)=>{
        console.log("add Todo", newTodo)
        
        setTodoArr([...todoArr,newTodo])
    }
    
    const removeTodo = (tno) =>{

        console.log("removeTodo ", tno)
        setTodoArr(todoArr.filter(ele=> ele.tno!==tno))
    }

    return ( 
        <TemplatePage>
       <TodoInput addTodo={addTodo}></TodoInput>
       <TodoList arr={todoArr} removeFn={removeTodo}></TodoList>
        </TemplatePage>
     );
}
 
export default TODO;