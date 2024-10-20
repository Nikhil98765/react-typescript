import React, {PropsWithChildren, useState} from "react";

import {Todo} from "../models/Todo";

type ctxObject = {
    items: Todo[],
    addTodo: (text: string) => void,
    deleteTodo: (id: string) => void
}

export const TodosContext = React.createContext<ctxObject>({
        items: [],
        addTodo: () => {},
        deleteTodo: (id: string) => {}
});


export const TodosContextProvider: React.FC<PropsWithChildren> = (props) => {

    const [todos, setTodos] = useState<Todo[]>([]);
    const addTodoHandler = (enteredText: string) => {
        const newTodo = new Todo(enteredText);
        setTodos(prevTodos => {
            return [
                ...prevTodos,
                newTodo
            ]
        })
    }
    const deleteTodoHandler = (id: string)=> {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.id !== id)
        });
    }

    const ctxValue: ctxObject = {
        items: todos,
        addTodo: addTodoHandler,
        deleteTodo: deleteTodoHandler
    }

    return (
        <TodosContext.Provider value={ctxValue}>
            {props.children}
        </TodosContext.Provider>
    )
}


