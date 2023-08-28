import axios from "axios"

export const getCategories = (callback) => {
    axios.get("https://fakestoreapi.com/products/categories")
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => {
            console.error(err)
        })
}

export const getProducts = (callback) => {
    axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => {
            console.error(err)
        })
}

export const getProductsByCategory = (category, callback) => {
    axios.get("https://fakestoreapi.com/products/category/" + category)
        .then((res) => {
            callback(res.data)
            console.log(res.data)
        })
        .catch((err) => {
            console.error(err)
        })
}

export const getDetailProduct = (id, callback) => {
    axios.get("https://fakestoreapi.com/products/" + id)
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => {
            console.error(err)
        })
}
