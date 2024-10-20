import React, {PropsWithChildren} from "react";

export const TodoItem: React.FC<PropsWithChildren<{text: string}>> = (props) => {
    return (
        <li>{props.text}</li>
    )
}
