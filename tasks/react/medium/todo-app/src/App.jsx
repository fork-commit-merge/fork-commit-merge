// React - Medium

import { useState, useEffect } from 'react';
import { useActionState } from 'react';
import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import PropTypes from 'prop-types';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todo')) || [];
    setTodos(storedTodos);
  }, []);

  const addTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem('todo', JSON.stringify(updatedTodos));
  };

  const editTodo = (index, newMessage) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, message: newMessage };
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem('todo', JSON.stringify(updatedTodos));
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    localStorage.setItem('todo', JSON.stringify(updatedTodos));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <Form addTodo={addTodo} />
      <Lists todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

const Form = ({ addTodo }) => {
  const formAction = async (prevState, formData) => {
    const message = formData.get('message');
    console.log('Form submitted', { message });
    addTodo({ message });
    return { success: true };
  };

  const [lastResult, action, isPending] = useActionState(formAction, undefined);

  const formSchema = {
    message: {
      required: true,
      minLength: 1,
      maxLength: 20,
      errorMessages: {
        required: 'add Todo',
        minLength: 'more than 1 character',
        maxLength: 'less than 20 characters',
      },
    },
  };

  const [form, fields] = useForm({
    lastResult,
    onValidate() {
      return { schema: formSchema };
    },
    shouldValidate: 'onSubmit',
  });

  return (
    <form {...getFormProps(form)} action={action}>
      <input
        name="message"
        placeholder="add todo"
        {...getInputProps(fields.message, { type: 'text' })}
      />
      <button aria-busy={isPending} type="submit">
        Add
      </button>
    </form>
  );
};

const Lists = ({ todos, editTodo, deleteTodo }) => {
  if (!todos || todos.length === 0) {
    return <p>No todos</p>;
  }
  return (
    <ul>
      {todos.map((todo, index) => (
        <ListsItem
          key={index}
          index={index}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

const ListsItem = ({ todo, index, editTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editMessage, setEditMessage] = useState(todo.message);
  const handleDelete = () => {
    deleteTodo(index);
  };

  const handleEdit = () => {
    if (isEditing) {
      setIsEditing(false);
      setEditMessage(todo.message);
    } else {
      setIsEditing(true);
    }
  };

  const handleEditDone = () => {
    editTodo(index, editMessage);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <li>
        <input
          value={editMessage}
          onChange={(e) => setEditMessage(e.target.value)}
        />
        <button onClick={handleEditDone}>save</button>
        <button onClick={handleEdit}>cancel</button>
      </li>
    );
  }

  return (
    <li>
      {todo.message}
      <div>
        <button onClick={handleEdit}>edit</button>
        <button onClick={handleDelete}>delete</button>
      </div>
    </li>
  );
};

ListsItem.propTypes = {
  todo: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

Form.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

Lists.propTypes = {
  todos: PropTypes.array.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default App;
