import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDetailProduct } from "../../services/product.service"
import { NavbarDefault } from "../layouts/Navbar"
import { Breadcrumbs, Typography, Rating } from "@material-tailwind/react"

const DetailProductPage = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        getDetailProduct(id, (data) => {
            setProduct(data)
        })
    }, [id, product])
    return (
        <>
            <NavbarDefault />
            <div className="min-h-screen mx-auto max-w-screen py-2 px-4 lg:px-8 lg:py-4">

                <div className="container mx-auto">
                    <Breadcrumbs fullWidth>
                        <a href="#" className="opacity-60">
                            Docs
                        </a>
                        <a href="#" className="opacity-60">
                            Components
                        </a>
                        <a href="#">Breadcrumbs</a>
                    </Breadcrumbs>
                    <div className="w-full grid lg:grid-cols-2 gap-4 py-6">
                        <figure className="w-full min-h-screen">
                            <img
                                className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                                src="./product.jpg"
                                alt="nature image"
                            />
                        </figure>
                        <figcaption>
                            <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                            <Typography variant="lead">
                                {product.description}
                            </Typography>
                            <Rating value={Math.floor(product.rating.rate)} readonly />
                            <Typography>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem atque molestiae maxime, odio deleniti reiciendis quos! Officia dicta quo repudiandae.
                            </Typography>
                        </figcaption>
                    </div>
                    {Object.keys(product).length > 0 &&
                        <div className="grid lg:grid-cols-2 gap-4 px-4">
                            <figure><img className="h-100 w-full object-scale-down" src={product.image} alt={product.title} loading="lazy" /></figure>
                            <form className="flex-auto p-6">
                                <div className="flex flex-wrap">
                                    <h1 className="flex-auto text-lg font-semibold text-slate-900">
                                        {product.title}
                                    </h1>
                                    <div className="text-lg font-semibold text-slate-500">
                                        ${product.price}
                                    </div>
                                    <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                                        Review {product.rating.rate}/5 ({product.rating.count})
                                    </div>
                                </div>
                                <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                                    <div className="space-x-2 flex text-sm">
                                        {product.description}
                                    </div>
                                </div>
                                <div className="flex space-x-4 mb-6 text-sm font-medium">
                                    <div className="flex-auto flex space-x-4">
                                        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                                            Buy now
                                        </button>
                                        <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                                            Add to bag
                                        </button>
                                    </div>
                                    <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                                        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="text-sm text-slate-700">
                                    Free shipping on all continental US orders.
                                </p>
                            </form>
                        </div>
                    }

                </div >
            </div >
        </>

    )
}

export default DetailProductPage