import axios from "axios";

const server = "http://localhost:8080/api/todos/";

export const getList = async() => {

    const res = await axios.get(`${server}list`)

    return res.data

}

export const postTodo = async(todo) =>{

    const res = await axios.post(`${server}`,todo)

    return res.data
}