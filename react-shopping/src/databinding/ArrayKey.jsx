export function ArrayKey(){
    var categories = ["Electronics", "Footwear", "Fashion"];
     return(
        <div className="container-fluid">
            <h2>Categories</h2>
            <ul className="list-unstyled">
                {
                    categories.map((category)=>
                     <li key={category}><a href="#">{category}</a></li>
                    )
                }
            </ul>
            <div>
                {
                    categories.map((category)=>
                     <button key={category} className="btn btn-danger mb-2 d-block w-25">{category}</button>
                    )
                }
            </div>
            <ul className="list-unstyled">
                {
                    categories.map((category)=>
                     <li key={category}><input type="checkbox"/> {category}</li>
                    )
                }
            </ul>
            <ol>
                {
                    categories.map((category)=>
                        <li key={category}>{category}</li>
                    )
                }
            </ol>
            <select>
                {
                    categories.map((category)=>
                      <option key={category}>{category}</option>
                    )
                }
            </select>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Categories</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map((category)=>
                          <tr key={category}>
                            <td>{category}</td>
                          </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
     )
}