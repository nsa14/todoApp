function NavTab(){
    return(
        <>
            <nav className="col-6 mb-3">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active font-weight-bold" id="nav-home-tab">undone <span
                        className="badge badge-secondary">9</span></a>
                    <a className="nav-item nav-link font-weight-bold" id="nav-profile-tab">done <span
                        className="badge badge-success">9</span></a>
                </div>
            </nav>
        </>
    )
}

export default NavTab;