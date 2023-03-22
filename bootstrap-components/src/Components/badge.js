export function Badge() {
    return (
        <div class="container-fluid">
            <div>
                <h1>Bootstrap Badge </h1>
                <h1>Example heading <span class="badge">Ne w</span></h1>
                <h1>Example heading <span class="label badge-warning">New</span></h1>
                <h2>Example heading <span class="badge badge-secondary">New</span></h2>
                <h3>Example heading <span class="badge badge-secondary">New</span></h3>
            </div>
            <button type="button" class="btn btn-primary">
                Notifications <span class="badge badge-light">4</span>
            </button>
            <button class="badge badge-pill badge-light">Light</button>
            <button type="button" class="btn btn-primary">
                Notifications <span class="badge badge-light">4</span>
            </button>
            <li><span class="badge badge-success badge-pill">Contact</span>
            <span class="badge badge-pill badge-primary">Primary</span> </li>
        </div>

    )
}