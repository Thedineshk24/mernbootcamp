const { API } = require("../../backend");

//category calls
export const createCategory = (userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`,{
        method: "POST",
        headers:{
            accept: "application/json",
            "Content-Type" : "application/json",
            Authorization: `Bearer ${token}`,
        },
    body: JSON.stringify(category)
    })
    .then(response => {
        return response.json()
    })
    .catch(error => console.log(error))
}

//get all categories
export const categories = () => {
    return  fetch(`${API}/categories`,{
        method:"GET"
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}


// products calls

//create a product
export const createaProduct = (userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`, {
        method:"POST",
        headers:{
            accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: product
    })
    .then(response => {
        return response.json()
    })
    .catch(error => console.log(error))
}

// get all products
export const getProducts = () => {
    return  fetch(`${API}/products`,{
        method:"GET"
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}


// delete a product
export const deleteProduct = (productId ,userId, token) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method:"DELETE",
        headers:{
            accept: "application/json",
            Authorization: `Bearer ${token}`,
        }
    })
    .then(response => {
        return response.json()
    })
    .catch(error => console.log(error))
}

// get a product
export const getProduct = productId => {
    return fetch(`${API}/product/${productId}`, {
        method:"GET"
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

// update a product
export const updateProduct = (productId, userId, token, product) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method:"PUT",
        headers:{
            accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: product
    })
    .then(response => {
        return response.json()
    })
    .catch(error => console.log(error))
}