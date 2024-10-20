import React, {useContext} from "react";

import {TodoItem} from "./TodoItem";
import classes from './Todos.module.css';
import {TodosContext} from "../store/todos-context";

export const Todos: React.FC = () => {
    const todoCtxObj = useContext(TodosContext);

    return (
        <ul className={classes.todos}>
            {todoCtxObj.items.map(item => (
                <TodoItem key={item.id} text={item.text} deleteTodo={() => todoCtxObj.deleteTodo(item.id)}/>
            ))}
        </ul>
    )
}
