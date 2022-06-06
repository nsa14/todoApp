import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodoReducer} from "../../store/slices/todoSlice";
import ToastNotification from "../../helpers/ToastNotification";

function AddTodoButton(){

    const [txtAddTodo, setAddTodo] =  useState('');

    const todosList = useSelector(state=>state.todos.todosList);
    const dispatch = useDispatch()

    const addTodoHandler=()=>{
        console.log('addTodoHandler');
        dispatch(addTodoReducer(txtAddTodo));
        setAddTodo('');
        ToastNotification(`successfully added task`, 'success');
    }

    const txtAddTodoHandler=(e)=>{
        setAddTodo(e.target.value)
    }

    return(
        <>
            <div className="form-group">
                <input onChange={txtAddTodoHandler} value={txtAddTodo} type="text" className="form-control mx-sm-3" placeholder="i want to do ..."/>
                <button className="btn btn-primary" onClick={addTodoHandler}>add</button>
            </div>
        </>
    )
}

export default AddTodoButton;