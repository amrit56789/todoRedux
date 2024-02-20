import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo, handleEditTodo } from "../redux/todoApp/actions";

export const Form = ({ editForm, editTodo, cancelUpdate }) => {
    const [todoValue, setTodoValue] = useState('')
    const [editValue, setEditValue] = useState('')
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault()
        const uniqueId = new Date().getTime()
        let todoPayload = {
            id: uniqueId,
            todo: todoValue,
            completed: false
        }
        dispatch(addTodo(todoPayload))
        setTodoValue('')
    }

    useEffect(() => {
        setEditValue(editTodo.todo)
    }, [editTodo])

    const editSubmit = (e) => {
        e.preventDefault()
        let editPayload = {
            id: editTodo.id,
            todo: editValue,
            completed: false
        }
        dispatch(handleEditTodo(editPayload))
    }
    return (
        <>
            {editForm === false ? (
                <form className="form-group custom-form" onSubmit={handleSubmit}>
                    <label>Add Todo Items</label>
                    <div className="input-and-btn">
                        <input type="text" className="form-control" required value={todoValue}
                            onChange={(e) => setTodoValue(e.target.value)} />
                        <button type="submit" className="btn btn-secondary btn-md">Add</button>
                    </div>
                </form>
            ) : (
                <form className="form-group custom-form" onSubmit={editSubmit}>
                    <label>Update Todo Items</label>
                    <div className="input-and-btn">
                        <input type="text" className="form-control" required
                            value={editValue} onChange={(e) => setEditValue(e.target.value)} />
                        <button type="submit" className="btn btn-secondary btn-md">Update</button>
                    </div>
                    <button className="btn btn-primary btn-md back-btn" onClick={cancelUpdate}>Back</button>
                </form>
            )}
        </>

    )
}