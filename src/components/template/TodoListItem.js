import ToggleStatusTask from "../actionTodo/btnDoneUndone";
import DeleteTodoButton from "../actionTodo/btnDeleteTodo";
import React from "react";
import EditTodoButton from "../actionTodo/btnEditeTodo";

function TodoItem({item}) {

    return (

        item.map((value, index) => {
            return (
                <div className="col-6 mb-2" key={index}>
                    <div className="d-flex justify-content-between align-items-center border rounded p-3">
                        <div>
                            {value.task}
                        </div>
                        <div>

                            <EditTodoButton todoId={value.id}/>
                            <ToggleStatusTask todoId={value.id}/>
                            <DeleteTodoButton todoId={value.id}/>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default TodoItem;