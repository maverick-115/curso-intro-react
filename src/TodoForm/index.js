import React, {useState} from "react";
import { TodoContext } from "../App/TodoContext";
import './TodoForm.css';

function TodoForm() {
    const [newTodoValue, setNetTodoValue] = useState("")
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)
    
    const onCancel = () => {
        setOpenModal(false);

    };
    const onChange = (event) => {
       setNetTodoValue( event.target.value);
    };
    
    
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);

    };
    return(
        <form onSubmit={onSubmit}>
            <label>Escribir nueva tarea</label>
            <textarea 
            value= {newTodoValue}
            onChange={onChange}
            placeholder="Cortar cebollas"
            />
            <div className="Todoform-buttonContainer">
                <button 
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}>
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                    >
                    Añadir
                </button>
            </div>
        </form>
    );
}
export {TodoForm}