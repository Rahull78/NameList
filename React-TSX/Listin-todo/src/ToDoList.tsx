import React, { useState } from 'react'

interface name{
    id : number;
    text : string;
    completed : boolean;
}

export const ToDoList: React.FC = () => {
    const [todos, setTodos] = useState<name[]>([
    ])

    const [input, setInput] = useState <string>("");

    const handleToggle =(id: number) =>{
        setTodos(
            todos.map((todo)=>{
                if (todo.id === id) {
                    return {...todo, completed:!todo.completed}                    
                }
                return todo;
            })
        )
    }

    const handleClick = () => {
        const newTodo : name = {id : Date.now(), text : input, completed: false}
        setTodos([...todos, newTodo])
    }

  return (
    <div className="main-container">
        <h1>Name List</h1>
        <ol>
            {todos.map((todo)=>(
                <li key={todo.id} 
                onClick={()=>handleToggle(todo.id)}>{todo.text} 
                </li>
            ))}
        </ol>
        <input type="text"
        placeholder='Name' 
        onChange={(e) => setInput(e.currentTarget.value)}/>

        <button onClick={handleClick}>Add</button>
    </div>
  )
}
