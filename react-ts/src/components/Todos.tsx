import React, { PropsWithChildren } from "react";

import {Todo} from "../models/Todo";
import {TodoItem} from "./TodoItem";
import classes from './Todos.module.css';

export const Todos: React.FC<PropsWithChildren<{items: Todo[], deleteTodoItem: (id: string) =>  void}>> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.items.map(item => (
                <TodoItem key={item.id} text={item.text} deleteTodo={() => props.deleteTodoItem(item.id)}/>
            ))}
        </ul>
    )
}
