import React, {useContext, useRef} from "react";

import classes from './NewTodo.module.css';
import {TodosContext} from "../store/todos-context";

export const NewTodo: React.FC = () => {

    const todoCtxObj = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;
        if(enteredText.trim().length === 0) {
            // throw error
            return;
        }
        todoCtxObj.addTodo(enteredText);
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoTextInputRef}/>
            <button>Add Todo</button>
        </form>
    )
}
