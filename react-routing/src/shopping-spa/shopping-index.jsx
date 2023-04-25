import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ShoppingHome } from "./shopping-home";
import { ShoppingProducts } from "./shopping-products";
import { ShoppingDetails } from "./shopping-details";

export function ShoppingIndex(){
    return(
        <div className="container-fluid">
           <BrowserRouter>
           <header className="bg-dark text-white p-2 mt-2 d-flex justify-content-between">
                <div>Shopper.</div>
                <div>
                    <span className="me-2"> <Link to="home" className="text-white text-decoration-none">Home</Link> </span>
                    <span className="me-2">Electronics</span>
                    <span className="me-2">Jewelery</span>
                    <span className="me-2">Men's Clothing</span>
                    <span className="me-2">Women's Clothing</span>
                </div>
                <div>
                    <span className="bi bi-person-fill me-2"></span>
                    <span className="bi bi-heart me-2"></span>
                    <span className="bi bi-search me-2"></span>
                    <span className="bi bi-cart4 me-2"></span>
                </div>
            </header>    
            <section className="mt-3 overflow-auto" style={{height:'500px'}}>
                <Routes>
                    <Route path="/" element={<ShoppingHome />} />
                    <Route path="home" element={<ShoppingHome />} />
                    <Route path="products/:catName" element={<ShoppingProducts />} />
                    <Route path="details/:prodId" element={<ShoppingDetails />} />
                    <Route path="*" element={<div><h2 className="text-danger">Requested Path Not Found</h2></div>} />
                </Routes>
            </section>     
           </BrowserRouter>  
        </div>
    )
}