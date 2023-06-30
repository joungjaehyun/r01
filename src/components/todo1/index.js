import { useEffect, useState } from "react";
import Todo1List from "./Todo1List";
import Todo1Input from "./Todo1Input";
import Todo1Read from "./Todo1.Read";
import uuid from 'react-uuid'

// const viewMap={}
const Todo1 = () => {
    // 명령어설정 route시에 사용
    // const [cmd,setCmd] = useState("")
    // index 데이터 설정
    const [todos, setTodos] = useState([])
    const [current,setCurrent] = useState(null)
    //route시에 사용
    // const changeView = (str) =>{
    //     setCmd(str)
    // }

    const addTodo = (todoObj) =>{

        console.log(uuid(),todoObj)
        // set이 2번이라 2번의 렌더링이라 생각할수있지만
        // React에서는 렌더링을 최소화 할려고해서
        // 그래서 State를 모아서 정리하려한다.
        setTodos([...todos,{tno:uuid(), ...todoObj}])
        // setCmd("list")
    }
    const requestView = (tno)=>{
        const target = todos.filter(todo=> todo.tno === tno)[0]
        
        console.log("requestView ", target)

        setCurrent({...target})
        // setCmd("read")

        
    }
  
    const remove = (tno)=>{
        setTodos(todos.filter(todo => todo.tno!==tno))
        setCurrent(null)
    }

    const modify = (modified) =>{

        const target =todos.filter(todo =>todo.tno===modified.tno)[0]

        target.title = modified.title

        setTodos([...todos])
        setCurrent(null)
    }   


    // useEffect(()=>{
    //     viewMap.list=<Todo1List todos={todos}changeView={changeView}  requestView={requestView}></Todo1List>
    //     viewMap.input=<Todo1Input changeView={changeView} addTodo={addTodo}></Todo1Input>
    //     viewMap.read=<Todo1Read changeView={changeView} current={current}></Todo1Read>
    // },[])


 


    // 지금 getView방식은 항상
    // 새로운 component를 계속해서 만들어 낸다.
    // 비효율적이다
    // const getView = ()=>{

    //     return viewMap[cmd]
    //     // if(cmd==="list"){
    //     //     return <Todo1List todos={todos}changeView={changeView}  requestView={requestView}></Todo1List>
    //     // }else if(cmd==="input"){
    //     //     return <Todo1Input changeView={changeView} addTodo={addTodo}></Todo1Input>
    //     // }else if(cmd==="read"){
    //     //     return <Todo1Read changeView={changeView} current={current}></Todo1Read>
    //     // }
    // }


    return (
        <>
            <div className="text-5xl">Todo 1</div>
            
            <div>
            <Todo1Input addTodo={addTodo}></Todo1Input>
            <Todo1Read  current={current} remove={remove} modify={modify}></Todo1Read>
            <Todo1List todos={todos}  requestView={requestView}></Todo1List>

            </div>
        </>
        );
}

export default Todo1;