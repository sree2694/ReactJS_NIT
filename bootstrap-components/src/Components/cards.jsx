import './cards.css'
export function Cards() {
    return (
        <div class="container-fluid">
            <h2>Products Catalog</h2>
            <div class="card">
                <div class="card border border-primary">
                    <img class="rounded-circle border border-primary" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71ZlR7X-+fL._SL1500_.jpg" width="50%" height="50%" alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71qFb2FIz5L._UL1500_.jpg" width="50%" height="50%" alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                </div>
            </div>
        </div>
    )
}