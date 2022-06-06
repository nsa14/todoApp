import {EditTodoReducer} from "../../store/slices/todoSlice";
import ToastNotification from "../../helpers/ToastNotification";
import {useDispatch, useSelector} from "react-redux";
import React from "react";

function EditTodoButton({todoId}){

    const todosList = useSelector(state => state.todos.todosList);
    const selected = todosList.filter((item) => item.id === todoId)[0]
    const dispatch = useDispatch()

    const editTodoHandler = () => {
        // console.log(selected);
        dispatch(EditTodoReducer(todoId))
        ToastNotification(`successfully edited task`, 'success');
    }
    return(
        <>
                <button type="button" className="btn btn-info btn-sm" onClick={editTodoHandler}>edit</button>
        </>
    )
}

export default EditTodoButton;