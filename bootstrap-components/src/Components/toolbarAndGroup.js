export function ToolbarAndGroup(){
    return(
        <div class="container-fluid">
        <h2>Amazon Shopping</h2>
        <div class="btn-toolbar bg-danger justify-content-between">
            <div class="btn-group">
                <button class="btn btn-danger"> <span class="fa fa-home"></span> Home</button>
                <button class="btn btn-danger"> <span class="fa fa-tv"></span> Electronics</button>
                <button class="btn btn-danger"> <span class="fa fa-tshirt"></span> Fashion</button>
            </div>
            <div class="btn-group">
                <button class="btn btn-danger"><span class="fa fa-search"></span> Search</button>
                <button class="btn btn-danger"><span class="fa fa-user"></span> Login</button>
            </div>
        </div>
    </div>

    )
}