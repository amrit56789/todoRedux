import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { Icon } from 'react-icons-kit';
import { trash } from 'react-icons-kit/feather/trash'
import { edit2 } from 'react-icons-kit/feather/edit2'
import { removeTodo, handleCheckBox} from "../redux/todoApp/actions";

export const Todos = ({ handleEdit, editForm }) => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todoReducers)
    return todos.map((todo) => (
        <div key={todo.id} className='todo-box'>
            <div className='content'>
                {editForm === false && (
                    <input type="checkbox" checked={todo.completed}
                        onChange={() => dispatch(handleCheckBox(todo.id))}
                    ></input>
                )}
                <p style={todo.completed === true ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                    {todo.todo}
                </p>
            </div>
            <div className='actions-box'>
                {editForm === false && (
                    <>
                        <span onClick={() => handleEdit(todo)}><Icon icon={edit2} /></span>
                        <span onClick={() => dispatch(removeTodo(todo.id))}><Icon icon={trash} /></span>
                    </>
                )}
            </div>
        </div>
    ))
}