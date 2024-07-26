export const addTodo="addTodo"
// export const DECREMENT="DECREMENT"
export const resetTodo="resetTodo"


export const todoAddTodo=(value)=>{
    return {
        type:addTodo,
        payload:value
    }
}

export const todoResetTodo=()=>{
    return {
        type:resetTodo,
    }
}