import React, { useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import TodoItem from '../components/TodoItem';

function Todos() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Arrive at Fiumicino Airport', completed: false },
    { id: 2, text: 'Leonardo Express to city center', completed: false },
    { id: 3, text: 'Visit Spanish Steps', completed: false },
    { id: 4, text: 'Throw a coin in Trevi Fountain', completed: false },
    { id: 5, text: 'Dinner in Trastevere', completed: false }
  ]);

  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');

  // Add new todo
  function handleAddTodo(e) {
    e.preventDefault();

    if (!newTodo.trim()) return;

    const newItem = {
      id: Date.now(),
      text: newTodo,
      completed: false
    };

    setTodos([...todos, newItem]);
    setNewTodo('');
  }

  // Toggle completed
  function toggleTodo(id) {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  // Delete todo
  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  // Filter todos
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <div className="p-4">
      <h2>Italy Trip Todos</h2>

      {/* Add Todo Form */}
      <Form onSubmit={handleAddTodo} className="mb-3">
        <Form.Control
          type="text"
          placeholder="Add a new Italy trip task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button type="submit" className="mt-2">
          Add Todo
        </Button>
      </Form>

      {/* Filter Buttons */}
      <div className="mb-3">
        <Button
          variant={filter === 'all' ? 'primary' : 'outline-primary'}
          onClick={() => setFilter('all')}
          className="me-2"
        >
          All
        </Button>

        <Button
          variant={filter === 'completed' ? 'primary' : 'outline-primary'}
          onClick={() => setFilter('completed')}
          className="me-2"
        >
          Completed
        </Button>

        <Button
          variant={filter === 'incomplete' ? 'primary' : 'outline-primary'}
          onClick={() => setFilter('incomplete')}
        >
          Incomplete
        </Button>
      </div>

      {/* Todo Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Completed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              index={index}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Todos;
