import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { Todos } from './components/Todos';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAll } from './redux/todoApp/actions';

function App() {
  const todos = useSelector((state) => state.todoReducers)

  const dispatch = useDispatch()

  const [editForm, setEditForm] = useState(false)
  const [editTodo, setEditTodo] = useState('')
  const handleEdit = (todo) => {
    setEditForm(true)
    setEditTodo(todo)
  }

  const cancelUpdate = () => {
    setEditForm(false)
  }

  return (
    <div className="App">
      <Form editForm={editForm} editTodo={editTodo} cancelUpdate={cancelUpdate} />
      <Todos handleEdit={handleEdit} editForm={editForm} />
      {todos.length > 0 && (
        <button className='btn btn-danger btn-md delete-all' onClick={() => dispatch(deleteAll())}>DELETE ALL</button>
      )}
    </div>
  );
}

export default App;
