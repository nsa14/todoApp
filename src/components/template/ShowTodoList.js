import React, {useState} from "react";
import {useSelector} from "react-redux";
import DeleteTodoButton from "../actionTodo/btnDeleteTodo";
import ToggleStatusTask from "../actionTodo/btnDoneUndone";
import TodoItem from "./TodoListItem";

function NavTab() {

    const tabActive = useSelector(state => state.todos.tabActive);
    const todosList = useSelector(state => state.todos.todosList);

    const listUndone = todosList.filter(item => item.status === false);
    const listDone = todosList.filter(item => item.status === true);

    return (
        <>
            {
                !tabActive
                    ? <TodoItem item={listUndone}/>
                    : <TodoItem item={listDone}/>
            }
        </>
    )
}

export default NavTab;