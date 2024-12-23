import TodoInput from "./components/Todoinput"
import TodoList from "./components/Todolist"
import { useState } from "react"

function App() {
  
  const [todoValue, SetTodoValue] = useState("")
  const [todos, SetTodos] = useState(["Go to the gym",
    "Eat more fruits and veges",
    "Learn a Language"
  ])

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    SetTodos(newTodoList)
  }

  function handleDeleteTodos(index){
    const newTodoList = todos.filter((todo, todoindex)=>{
      return index !== todoindex
    })
    SetTodos(newTodoList)
  }
  

  function handleEditTodos(index){
      const valueTobeEdited = todos[index]
      SetTodoValue(valueTobeEdited)
      handleDeleteTodos(index)
  }


 
  return (
    <>
     <TodoInput todoValue={todoValue} SetTodoValue= {SetTodoValue} handleAddTodos = {handleAddTodos}/>
     <TodoList handleDeleteTodos={handleDeleteTodos} todos = {todos} handleEditTodos={handleEditTodos} />
    </>
  )
}

export default App
