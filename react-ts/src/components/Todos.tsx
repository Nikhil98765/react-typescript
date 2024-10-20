import React, { PropsWithChildren } from "react";
import {Todo} from "../models/Todo";
import {TodoItem} from "./TodoItem";

export const Todos: React.FC<PropsWithChildren<{items: Todo[]}>> = (props) => {
    return (
        <ul>
            {props.items.map(item => (
                <TodoItem key={item.id} text={item.text} />
            ))}
        </ul>
    )
}
