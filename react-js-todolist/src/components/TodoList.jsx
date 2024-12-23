import TodoCard from "./TodoCard"


function TodoList(props) {
  const {todos} = props  
  return (
    <ul className="main">
      {todos.map((todo, todoindex)=>{
        return(
            <TodoCard {...props} key={todoindex} index = {todoindex}>
                <p>{todo}</p>
            </TodoCard>
        )
      })}
    </ul>
  )
}

export default TodoList
