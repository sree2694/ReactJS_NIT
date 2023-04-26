import { Link, Route, Routes, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FakestoreDetails } from "./fakestore-details";

export function FakeStoreProducts()
{
    const params = useParams();
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios({
            method: "get",
            url: `http://fakestoreapi.com/products/category/${params.catName}`
        })
        .then(response=> {
            setProducts(response.data);
        })
    },[]);
    return (
        <div>
            <h2>Products</h2>
            <div className="row">
                <div className="col-6">
                    <ol>
                    {
                        products.map(product=> 
                            <li key={product.id}>
                                <Link to={`details/${product.id}`}>{product.title}</Link>
                            </li>
                            )
                    }
                </ol>
                </div>
                <div className="col-6">
                    <Routes>
                        <Route path="details/:prodId" element={<FakestoreDetails />} />
                    </Routes>
                </div>
            </div>
            <p>
                <Link to="/home">Back to Categories</Link>
            </p>
        </div>
    )
}