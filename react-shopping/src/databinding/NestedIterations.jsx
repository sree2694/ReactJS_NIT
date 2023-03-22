export function NestedIterations(){
    var menu = [
        {Category: "Electronics", Products: ["Mobiles", "Televisions"]},
        {Category: "Footwear", Products: ["Casuals", "Boots"]}
   ]
   return(
      <div className="container-fluid">
          <h2>Menu</h2>
          <ol>
              {
                  menu.map((item)=>
                    <li key={item.Category}>
                       {item.Category}
                       <ul>
                          {
                              item.Products.map((product)=>
                               <li key={product}>{product} <button className="btn btn-warning"><span className="bi bi-pen-fill"></span></button> </li>
                              )
                          }
                       </ul>
                    </li>
                  )
              }
          </ol>
          <hr />
          <select>
              {
                  menu.map((item)=>
                    <optgroup label={item.Category}>
                        {
                          item.Products.map((product)=>
                            <option>{product}</option>
                          )
                        }
                    </optgroup>
                  )
              }
          </select>
      </div>
   )
}