import React, {useState} from "react";
import {useSelector} from "react-redux";
import DeleteTodoButton from "../actionTodo/btnDeleteTodo";

function NavTab() {

    const tabActive = useSelector(state => state.todos.tabActive);
    const todosList = useSelector(state => state.todos.todosList);

    const listUndone = todosList.filter(item => item.status === 0);
    const listDone = todosList.filter(item => item.status === 1);

    return (
        <>
            {
                !tabActive
                    ? listUndone.map((value, index) => {
                        return (
                            <div className="col-6 mb-2" key={index}>
                                <div className="d-flex justify-content-between align-items-center border rounded p-3">
                                    <div>
                                        {value.task}
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-info btn-sm">edit</button>

                                        <DeleteTodoButton todoId={value.id}/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    :
                    listDone.map((value, index) => {
                        return (
                            <div className="col-6 mb-2" key={index}>
                                <div className="d-flex justify-content-between align-items-center border rounded p-3">
                                    <div>
                                        {value.task}
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-info btn-sm">edit</button>
                                        <button type="button" className="btn btn-danger btn-sm ml-1">delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })

            }
        </>
    )
}

export default NavTab;