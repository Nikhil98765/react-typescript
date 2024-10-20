import React, {PropsWithChildren} from "react";

import classes from './TodoItem.module.css';

export const TodoItem: React.FC<PropsWithChildren<{text: string, deleteTodo:() =>  void}>> = (props) => {
    return (
        <li className={classes.item} onClick={props.deleteTodo}>{props.text}</li>
    )
}
