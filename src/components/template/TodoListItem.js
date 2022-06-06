import ToggleStatusTask from "../actionTodo/btnDoneUndone";
import DeleteTodoButton from "../actionTodo/btnDeleteTodo";
import React, {useState} from "react";
import EditTodoButton from "../actionTodo/btnEditeTodo";

function TodoItem({item}) {

    const [edit, setEdit] = useState(false);

    const editTodoHandler = (v) => {
        console.log('editTodoHandler');
        setEdit(!edit)
    }

    return (
        item.map((value, index) => {
            return (
                edit
                    ? (<div className="col-6 mb-2" key={index}>
                        <EditTodoButton todoId={value.id} toggleEdit={editTodoHandler}/>
                    </div>)
                    :
                    (<div className="col-6 mb-2" key={index}>
                        <div className="d-flex justify-content-between align-items-center border rounded p-3">
                            <div>
                                {value.task}
                            </div>
                            <div className='justify-content-between'>
                                {
                                    !value.status ? <button type="button" className="btn btn-info btn-sm"
                                                            onClick={editTodoHandler}>edit
                                    </button> : ''
                                }
                                <ToggleStatusTask todoId={value.id}/>
                                <DeleteTodoButton todoId={value.id}/>
                            </div>
                        </div>
                    </div>)

            )
        })
    )
}

export default TodoItem;