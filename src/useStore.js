import {createStore} from "redux"
// import { todoAddTodo,todoResetTodo } from "./useAction.js"
import {  todoReducer} from "./useReducer.js"
import TodoList from "./pages/TodoList.jsx"

export const initialState={
    user:[]
}

export const store=createStore(todoReducer)


 

