import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import InputTodo from './InputTodo';
import TodoItem from './TodoItem';
// other imported components here

const TodosLogic = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="logic">
      <InputTodo setTodos={setTodos} />

      <ul className="list">
        {
        todos.map(({ title }) => (
          <TodoItem
            key={uuidv4()}
            title={title}
          />
        ))
      }
      </ul>

    </div>
  );
};
export default TodosLogic;
