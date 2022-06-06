
function AddTodoButton(){

    const addTodoHandler=()=>{
        console.log('addTodoHandler');
    }
    return(
        <>
            <div className="form-group">
                <input type="text" name='txt-todo' className="form-control mx-sm-3" placeholder="i want to do ..."/>
                <button className="btn btn-primary" onClick={addTodoHandler}>add</button>
            </div>
        </>
    )
}

export default AddTodoButton;