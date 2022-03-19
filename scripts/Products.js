import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    const mappedProducts = products.map(product => {
        return `<li id="product--${product.id}">${product.name}</li>`
    })
    // for (const product of products) {
    //     html += `<li id="product--${product.id}">${product.name}</li>`
    // }

    html += mappedProducts.join("")

    html += "</ul>"

    return html
}

