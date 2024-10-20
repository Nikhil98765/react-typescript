import {useState} from "react";

import {Todos} from "./components/Todos";
import {Todo} from "./models/Todo";
import {NewTodo} from "./components/NewTodo";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const onTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);
        setTodos(prevTodos => {
            return [
                ...prevTodos,
                newTodo
            ]
        })
    }

  return (
    <div>
        <NewTodo onAddTodo={onTodoHandler} />
      <Todos items={todos}></Todos>
    </div>
  );
}

export default App;
