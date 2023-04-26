import { Link, Route, Routes, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FakestoreRatings } from "./fakestore-ratings";

export function FakestoreDetails(){
    const params = useParams();
    const [product, setProduct] = useState({id:0, title:'', image: '', price:0, category: '', description:'', rating:{rate:0, count:0}});

    useEffect(()=>{
        axios({
            method : 'get',
            url: `http://fakestoreapi.com/products/${params.prodId}`
        })
        .then(response=>{
            setProduct(response.data);
        })
    },[params.prodId]);

    return(
        <div>
            <h2>Details</h2>
            <dl>
                <dt>Preview</dt>
                <dd>
                    <img src={product.image}  width="200" height="200"/>
                </dd>
                <dt>Price</dt>
                <dd>{product.price}</dd>
            </dl>
            <Link to="rating">Ratings</Link>
            <p>
                <Routes>
                    <Route path="rating" element={<FakestoreRatings/>} />
                </Routes>
            </p>
        </div>
    )
}