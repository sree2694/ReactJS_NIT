
export function NetflixHeader(){
    return(
        <header className="p-4 d-flex justify-content-between">
        <div className="brand-title">NETFLIX</div>
        <div className="d-flex">
            <div className="dropdown me-4">
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