import { Thunk } from ".."
import { ProductCreator } from "../../components/Products/ProductForm"
import { createSingleProduct, deleteSingleProduct, getAllProducts, updateSingleProduct } from "../../services/Products.service"
import { Product } from "../../shared/Table/Table.mockdata"

export const updateProduct = 
    (newProduct: Product): Thunk =>
    async (dispatch) => {
        await updateSingleProduct(newProduct)
        dispatch(getProducts())
    }


export const getProducts = 
    (): Thunk<Product[]> => 
    async (dispacth) => {
    const products = await getAllProducts()
    dispacth({
        type: 'FETCH_PRODUCTS',
        payload: products
    })
}

export const insertNewProduct = 
    (product: ProductCreator):Thunk =>
    async (dispacth) => {
    await createSingleProduct(product)
    dispacth(getProducts())
}

export const deleteProduct = 
    (productId : string):  Thunk => 
    async (dispatch) => {
        await deleteSingleProduct(productId)
        dispatch(getProducts())
    } 
