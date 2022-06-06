import logo from "../../logo.svg";
import AddTodoButton from "../actionTodo/btnAddTodo";

function Header(){
    return(
        <>
            <header className="App-header">
                <section className="jumbotron">
                    <img src={logo} className="App-logo" alt="logo" width='150'/>
                    <div className="container d-flex flex-column align-items-center">
                        <h1 className="jumbotron-heading">Todo App</h1>
                        <p className="lead text-muted">practice react-redux :</p>
                        <div className="form-inline">
                            <AddTodoButton/>
                        </div>
                    </div>
                </section>

            </header>
        </>
    )
}

export default Header;