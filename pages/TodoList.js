import react from "react";
import { useState } from "react";


const TodoList = ()=> {
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState("")

    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, { text: newTodo.trim(), checked: false}])
            setNewTodo("")
        }
    }

    const handleDeleteTodo = (index) => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos);
    }

    const handleToggleTodo = (index) => {
        const newTodos = [...todos]
        newTodos[index].checked = !newTodos[index].checked
        setTodos(newTodos)
    }

    return (
        <div style={{display: "flex", flexDirection:"column", alignItems:"center", minWidth:"500px", maxWidth:"600px", margin:"auto"}}>
            <h1>To-Do List</h1>
            <div style={{display:"flex", flexDirection:"row", width:"100%"}}>
                <input style={{flexBasis:"80%"}} type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
                <button style={{flexBasis:"20%"}} onClick={handleAddTodo}> Add </button>
            </div>
            <ul style={{padding:"0", width:"60%", listStyleType:"none"}}>
                {todos.map((todo, index) => (
                    <li key={index} style={{ borderStyle:"solid", margin:"0"}} >
                        <div style={{ display: "flex", alignItems:"center",justifyContent:"center", padding:"16px", width:"100%"}}>
                            <input style={{ flexBasis:"fit-content", flexGrow:1}}type="checkbox" checked={todo.checked} onChange={() => handleToggleTodo(index)}/>
                            <p className="wordwrap" style={{ flexGrow:4, width:"289px", borderStyle:"solid", marginRight: "10px", textDecoration: todo.checked ? "line-through" : "none"}}>
                                {todo.text}
                            </p>
                            <button style={{marginTop:"5px", flexGrow:1, marginBottom:"5px", flexBasis:"10%" }}onClick={()=> handleDeleteTodo(index)}>
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default TodoList;