import { useState } from "react"


function TodoInput(props) {
    const {handleAddTodos,todoValue, SetTodoValue} = props
    
  return (
    <header>
        <input value={todoValue} onChange={(e)=>{
            SetTodoValue(e.target.value)
        }} placeholder="Enter Todo..."/>
        <button onClick={()=>{
            handleAddTodos(todoValue)
            SetTodoValue("")
        }}>Add</button>
    </header>
  )
}

export default TodoInput
