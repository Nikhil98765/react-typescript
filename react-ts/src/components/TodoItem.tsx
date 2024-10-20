import React, {PropsWithChildren} from "react";
import {Todo} from "../models/Todo";

export const TodoItem: React.FC<PropsWithChildren<{text: string}>> = (props) => {
    return (
        <li>{props.text}</li>
    )
}
