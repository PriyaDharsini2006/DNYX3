import React from 'react';

function Todo({ todo, toggleTodo, deleteTodo }) {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
      <button onClick={toggleTodo}>{todo.completed ? 'Undo' : 'Complete'}</button>
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
}

export default Todo;
