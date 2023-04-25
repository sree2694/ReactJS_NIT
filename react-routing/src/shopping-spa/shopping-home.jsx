import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export function ShoppingHome(){

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        axios({
            method: "get",
            url: "http://fakestoreapi.com/products/categories",
        })
        .then((response)=> {
            setCategories(response.data);
        })
    },[]);

    return(
        <div className="container-fluid">
          <div>
            <h2>Categories</h2>
            <ol>
                {
                     categories.map(category=> 
                            <li key={category}>
                               <Link to={`/products/${category}`}> {category.toUpperCase()} </Link>
                            </li>
                        )
                }
            </ol>
              
          </div>
        </div>
    )
}