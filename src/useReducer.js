import { initialState } from "./useStore.js"
import { addTodo,resetTodo } from "./useAction.js"

export const todoReducer=(state=initialState,action)=>{

    switch (action.type) {
        case addTodo:
            return{
                
                user: [...state.user,action.payload],
            }
        case resetTodo:
            return{
                ...state,
                user: [],
            }
          
    
        default:
         return  state
    }
}
