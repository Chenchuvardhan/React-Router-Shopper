import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router";

export const Productitems = () => {
    const params = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        if (params.catname != "products") {
            axios.get(`https://fakestoreapi.com/products/category/${params.catname}`)
                .then(resp => { setData(resp.data) })
        }
        else {
            axios.get(`https://fakestoreapi.com/${params.catname}`)
                .then(resp => { setData(resp.data) })
        }
    }, [params.catname]);
    return (
        <div className="container-fluid d-flex justify-content-between align-items-center row">
            {
                data.map((product, index) =>
                    <div className="card col-4 mt-4 gap-1" key={index} style={{ width: '300px' }}>
                        <div className="card-header">
                            <img src={product.image} alt="" style={{ height: '170px', width: '250px' }} />
                            
                        </div>
                        <div className="card-body">
                            <p>{product.title}</p>
                            <p className="fw-bold fs-6">{product.price} USD  <span className="bg-danger text-white badge"> 20% OFF</span></p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-warning mx-2 bi bi-cart">&nbsp;Cart</button><button className="btn btn-info">Buy</button>
                        </div>
                    </div>)
            }
        </div>
    )
}