import React,{ Dispatch, SetStateAction, useState} from "react";
import TodoService from "../TodoService";
import type { TodoTypes } from "./TodoTypes";
import "../CSS/TodoForm.css";
interface PropTypes {
    setTodos: Dispatch<SetStateAction<TodoTypes[]>>
    }

const TodoForm:React.FC<PropTypes> = ({ setTodos }) => {
    const[newTodoText, setNewTodoText] = useState<string>("");
    const handleAddTodo = () => {
      if (newTodoText.trim() !== '') {
        const newTodo = TodoService.addTodos(newTodoText);
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setNewTodoText("");
      }
    }
  return <div className="inputForm">
    <input type="text" value={newTodoText}
    onChange={(e) => setNewTodoText(e.target.value)}
    autoFocus={true}
    placeholder="Agregar Nueva Tarea"
    />
    <button onClick={handleAddTodo}>Agregar Tarea</button>

    </div>
  };
export default TodoForm