import {useDispatch, useSelector} from "react-redux";
import {addTodoReducer, changeStatusTodoReducer} from "../../store/slices/todoSlice";
import ToastNotification from "../../helpers/ToastNotification";

function ToggleStatusTask({todoId}) {

    const todosList = useSelector(state => state.todos.todosList);
    const selected = todosList.filter((item) => item.id === todoId)[0]
    const dispatch = useDispatch()



    const toggleStatusHandler = () => {
        // console.log(selected);
        dispatch(changeStatusTodoReducer(todoId))
        ToastNotification(`successfully done/undone task`, 'success');
    }

    return (
        <>
            {
                !selected.status
                    ? <button className="btn btn-success btn-sm m-2" onClick={toggleStatusHandler}> done</button>
                    : <button className="btn btn-warning btn-sm m-2" onClick={toggleStatusHandler}> unDone</button>
            }
        </>
    )
}

export default ToggleStatusTask;