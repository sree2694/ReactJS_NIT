export function AlertMessage() {
    return (
        <div className='container-fluid'>
             <div><h2>Alert</h2></div>
              <div class="alert alert-success alert-dismissible show fade" role="alert">
            <button data-dismiss="alert" class="close">x</button>
            <h2 class="alert-heading">Registered Successfully</h2>
            <p>Your registration completed.</p>
            {/* <a class="alert-link" href="#">Login</a> */}
            <p>
                <button data-dismiss="alert" class="btn btn-success">OK</button>
            </p>
        </div>

        </div>
    )
}

