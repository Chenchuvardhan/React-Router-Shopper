import { BrowserRouter, Link, Route, Routes } from "react-router"
import { Productitems } from "../shopperproducts/shopperproducts"

export const Shopper = () => {
    return (
        <div>
            <BrowserRouter>
                <div className="container-fluid d-flex justify-content-between align-items-center p-2">
                    <div className="fs-3 fw-bold mx-2">
                        Shopper.
                    </div>
                    <div className="d-flex ">
                        <Link to="/products" className="btn text-dark mx-2 fw-bold fs-5">All</Link>
                        <Link to="category/electronics" className="btn text-dark mx-2 fw-bold fs-5"> Electronics</Link>
                        <Link to="category/jewelery" className="btn text-dark mx-2 fw-bold fs-5" >Jewellery</Link>
                        <Link to="category/men's clothing" className="btn text-dark mx-2 fw-bold fs-5" >Men's Fashion</Link>
                        <Link to="women's clothing" className="btn text-dark mx-2 fw-bold fs-5" >Women's Fashion</Link>
                    </div>
                    <div className="d-flex">
                        <span className="bi bi-heart mx-2 fw-bold"></span>
                        <span className="bi bi-search mx-2 fw-bold"></span>
                        <span className="bi bi-person mx-2 fw-bold"></span>
                        <span className="bi bi-cart mx-2 fw-bold  "></span>
                    </div>
                </div>
                <div className="text-white bg-dark text-center p-2"> HAPPY HOLIDAY DEALS ON EVERYTHING </div>
                <div>
                </div>
                <div>
                    <Routes>
                        <Route path="/:catname" element={<Productitems />} ></Route>
                        <Route path="category/:catname" element={<Productitems />} ></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}