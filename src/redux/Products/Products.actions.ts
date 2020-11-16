import { ProductCreator } from "../../components/Products/ProductForm"
import { ActionCreator } from "./Products.reducer"

export const insertNewProduct = (payload: ProductCreator):ActionCreator<ProductCreator> => {
    return {
        type: 'INSERT_NEW_PRODUCT',
        payload
    }
}
