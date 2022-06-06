import {EditTodoReducer} from "../../store/slices/todoSlice";
import ToastNotification from "../../helpers/ToastNotification";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";

function EditTodoButton({todoId, toggleEdit}) {

    const todosList = useSelector(state => state.todos.todosList);
    const selected = todosList.filter((item) => item.id === todoId)[0]
    const dispatch = useDispatch()
    let [editText, setEditText] = useState(selected.task);

    const editChangeHandler = (e) => {
        // console.log(selected);
        setEditText(e.target.value);
    }

    const editTodoHandler = () => {
        toggleEdit(false);
        // console.log(selected);
        dispatch(EditTodoReducer({todoId, editText}))
        ToastNotification(`successfully edited task`, 'success');
    }
    return (
        <>
            <div className="d-flex justify-content-between align-items-center border rounded p-3">
                <div>
                    <input type="text" value={editText} onChange={editChangeHandler} className='form-control mx-sm-3'/>
                </div>
                <div>
                    <button type="button" className="btn btn-info btn-sm" onClick={editTodoHandler}>edit</button>
                </div>
            </div>
        </>
    )
}

export default EditTodoButton;