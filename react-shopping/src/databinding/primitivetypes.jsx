export function PrimitiveTypes() {
    var id = 1;
    var name = "Samsung TV";
    var price = 45000.44;
    var stock = true;
    return (
        <div className="container-fluid">
            <h2>Product Details</h2>
            <dl>
                <dt>Product Id</dt>
                <dd>{id}</dd>
                <dt>Name</dt>
                <dd>{name}</dd>
                <dt>Price</dt>
                <dd>{price}</dd>
                <dt>Stock</dt>
                <dd>{(stock == true) ? "Available" : "Out of Stock"}</dd>
            </dl>
        </div>
    )
}