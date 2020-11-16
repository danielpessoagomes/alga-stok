import { ProductCreator } from "../../components/Products/ProductForm"
import { getAllProducts } from "../../services/Products.service"
import { ActionCreator } from "./Products.reducer"

export const getProducts = () => async (dispacth: any) => {
    const products = await getAllProducts()
    dispacth({
        type: 'FETCH_PRODUCTS',
        payload: products
    })
}

export const insertNewProduct = (payload: ProductCreator):ActionCreator<ProductCreator> => {
    return {
        type: 'INSERT_NEW_PRODUCT',
        payload
    }
}
