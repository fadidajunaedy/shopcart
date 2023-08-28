import { useState, useEffect } from "react"
import { getProducts, getCategories, getProductsByCategory } from "../../services/product.service"
import { Link } from "react-router-dom"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Rating,
    Spinner,
} from "@material-tailwind/react"
import { Select, Option } from "@material-tailwind/react"

const ProductPage = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [filter, setFilter] = useState("")

    const getFilteredInput = (e) => {
        setTimeout(() => {
            setFilter(e)
        }, 1000)
    }

    useEffect(() => {
        setLoading(true)
        getCategories((data) => {
            setCategories(data)
        })

        if (filter.length > 0) {
            getProductsByCategory(filter, (data) => {
                setProducts(data)
                setLoading(false)
            })
        } else {
            getProducts((data) => {
                setProducts(data)
                setLoading(false)
            })
        }

        console.log(filter)
    }, [filter])

    return (
        <div className="min-h-screen mx-auto max-w-screen py-2 px-4 lg:px-8 lg:py-4">
            <div className="container mx-auto">
                <div className="w-full flex flex-col lg:flex-row justify-between items-center py-4 mb-6">
                    <Typography variant="h3" color="blue-gray" className="basis-3/4">
                        FEATURED PRODUCTS
                    </Typography>
                    <Select variant="standard" label="Categories" className="basis-1/4" onChange={getFilteredInput} defaultValue={''}>
                        {categories.map((category, index) => (
                            <Option key={index} value={category}>{category}</Option>
                        ))}
                    </Select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {loading ? <div className="lg:col-span-4 w-full min-h-screen flex justify-center items-center"><Spinner /></div> : products.length > 0 && products.map((product) => (
                        <Card key={product.id} className="mt-6 shadow-lg">
                            <CardHeader color="blue-gray" className="relative h-56 shadow-lg">
                                <img
                                    // src={product.image}
                                    src="./product.jpg"
                                    alt={product.title}
                                    loading="lazy"
                                />
                            </CardHeader>
                            <CardBody>
                                <div className="flex justify-between mb-2">
                                    <Typography variant="h6" color="blue-gray">
                                        {product.title.substring(0, 10)}...
                                    </Typography>
                                    <Typography variant="h6" color="blue-gray">
                                        {product.price.toLocaleString("us-US", { style: "currency", currency: "USD" })}
                                    </Typography>
                                </div>
                                <div className="flex gap-2 mb-2">
                                    <Rating value={Math.floor(product.rating.rate)} readonly />
                                    <Typography>
                                        ({product.rating.count})
                                    </Typography>
                                </div>
                                <Typography>
                                    Category : {product.category}
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0 flex justify-between">
                                <Link to={`/product/${product.id}`}>
                                    <Button variant="outlined" size="sm">Detail</Button>
                                </Link>
                                <Button size="sm">Add to Cart</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ProductPage