import React from "react";
import {useDispatch} from "react-redux";
import {deleteTodoReducer} from "../../store/slices/todoSlice";
import ToastNotification from './../../helpers/ToastNotification'

function DeleteTodoButton({todoId}){

    const dispatch = useDispatch()

    const deleteTodoHandler=()=>{
        const result = window.confirm("آیا از حذف مطمئن هستید؟")
        if (result) {
            dispatch(deleteTodoReducer(todoId))
            ToastNotification(`شماره کاربری ${todoId} به درستی حذف شد.`, 'success');
        }

    }
    return(
        <>
            <button type="button" className="btn btn-danger btn-sm ml-1" onClick={deleteTodoHandler}>delete</button>
        </>
    )
}

export default DeleteTodoButton;