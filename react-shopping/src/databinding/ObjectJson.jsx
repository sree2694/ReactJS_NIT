export function ObjectJson(){
    var product = {
        "Id" : 1,
        "Name": "Samsung LED TV",
        "Price": 145000.44,
        "Stock": true
    }
    return(
       <div className="container-fluid">
           <h2>Product Details</h2>
           <dl>
               <dt>Product Id</dt>
               <dd>{product.Id}</dd>
               <dt>Name</dt>
               <dd>{product.Name}</dd>
               <dt>Price</dt>
               <dd>{product.Price}</dd>
               <dt>Stock</dt>
               <dd>{(product.Stock==true)?"Available":"Out of Stock"}</dd>
           </dl>
       </div>
    )
}