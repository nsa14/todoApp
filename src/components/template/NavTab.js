import {tabActiveReducer} from "../../store/slices/todoSlice";
import {useDispatch, useSelector} from "react-redux";

function NavTab() {

    let tabActive = useSelector(state => state.todos.tabActive);

    const todosList = useSelector(state => state.todos.todosList);
    const dispatch = useDispatch()

    console.log(todosList)

    const todoUndone = todosList.filter(item => item.status === false);
    const todoDone = todosList.filter(item => item.status === true);

    const toggleHandler = () => {
        dispatch(tabActiveReducer())
    }
    return (
        <>
            {/*tabActive is : {tabActive.toString()}*/}
            <nav className="col-6 mb-3">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a onClick={() => toggleHandler()}
                       className={`nav-item nav-link font-weight-bold ${tabActive ? "" : "active"}`}
                       id="nav-home-tab">undone <span
                        className="badge badge-secondary"> {todoUndone.length}</span></a>
                    <a onClick={() => toggleHandler()}
                       className={`nav-item nav-link font-weight-bold ${tabActive ? "active" : ""}`}
                       id="nav-profile-tab">done <span
                        className="badge badge-success"> {todoDone.length}</span></a>
                </div>
            </nav>
        </>
    )
}

export default NavTab;