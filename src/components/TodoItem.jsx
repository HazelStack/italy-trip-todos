import React from 'react';
import { Button, Form } from 'react-bootstrap';

function TodoItem({ todo, index, onToggle, onDelete }) {
  return (
    <tr>
      <td>{index + 1}</td>

      <td
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none'
        }}
      >
        {todo.text}
      </td>

      <td>
        <Form.Check
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
      </td>

      <td>
        <Button
          variant="danger"
          size="sm"
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default TodoItem;
