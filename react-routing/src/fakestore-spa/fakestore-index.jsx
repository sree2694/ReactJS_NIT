import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FakeStoreHome } from "./fakestore-home";
import { FakeStoreProducts } from "./fakestore-products";
import { FakestoreDetails } from "./fakestore-details";
import { FakestoreRatings } from "./fakestore-ratings";

export function FakeStoreIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <header>
                <nav>
                    <span><Link to="home">Home</Link></span>
                </nav>
            </header>
            <section className="mt-3">
                <Routes>
                    <Route path="/" element={<FakeStoreHome />} />
                    <Route path="home" element={<FakeStoreHome />} />
                     <Route path="products/:catName" element={<FakeStoreProducts />}>
                         <Route path="details/:prodId" element={<FakestoreDetails/>} >
                             <Route path="rating" element={<FakestoreRatings />} />
                         </Route>
                     </Route>
                    <Route path="*" element={<h2>Not Found</h2>} />
                </Routes>
            </section>
            </BrowserRouter>
        </div>
    )
}