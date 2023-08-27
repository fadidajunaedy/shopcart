import { useState, useEffect } from "react"
import { getProducts, getCategories } from "../../services/product.service"
import { Link } from "react-router-dom"
import Jumbotron from "../fragments/Jumbotron"
import SelectOption from "../elements/select"

const ProductPage = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getProducts((data) => {
            setProducts(data)
        })

        getCategories((data) => {
            setCategories(data)
        })
    }, [])

    return (
        <div className="min-h-screen py-4 px-6">
            {/* <Jumbotron /> */}
            <div className="w-full flex justify-between items-center py-6">
                <h2 className="font-bold text-2xl ">Featured Products</h2>
                <SelectOption>
                    <option disabled selected>Categories</option>
                    {categories.length > 0 && categories.map((category, index) => (
                        <option key={index}><a>{category}</a></option>
                    ))}
                </SelectOption>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.length > 0 && products.map((product) => (
                    <Link to="/" key={product.id} className="card bg-base-100 shadow-xl">
                        <figure><img className="h-60 w-full object-scale-down" src={product.image} alt={product.title} loading="lazy" /></figure>
                        <div className="card-body">
                            <h2 className="card-title flex justify-between">
                                {product.title.substring(0, 10)}...
                                <span>{product.price.toLocaleString("us-US", { style: "currency", currency: "USD" })}</span>
                            </h2>
                            <p className="line-clamp-2 text-sm">Category: {product.category}</p>
                            <p className="line-clamp-2 text-sm">Rating {product.rating.rate}/5 ({product.rating.count})</p>
                            <button className="btn btn-primary">
                                Add to Chart
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ProductPage