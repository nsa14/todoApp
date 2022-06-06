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
        ToastNotification(`successfully added task`, 'success');
    }

    return (
        <>
            {
                selected.status === 0
                    ? <button className="btn btn-success" onClick={toggleStatusHandler}> done</button>
                    : <button className="btn btn-warning" onClick={toggleStatusHandler}> unDone</button>
            }
        </>
    )
}

export default ToggleStatusTask;