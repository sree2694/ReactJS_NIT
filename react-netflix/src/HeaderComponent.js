export function HeaderComponent(){
    return(
        <header className="p-3 d-flex justify-content-between">
            <div className="brand-title">NETFLIX</div>
            <div className="d-flex">
                <div className="dropdown me-3">
                    <button className="btn btn-dark dropdown-toggle">
                        <span className="bi bi-globe"></span>
                         English
                    </button>
                </div>
                <div>
                    <button className="btn btn-danger">
                        Sign In
                    </button>
                </div>
            </div>
        </header>
    )
}