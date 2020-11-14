import { Product } from "../../shared/Table/Table.mockdata"
import { ActionCreator } from "./Products.reducer"

export const insertNewProduct = ():ActionCreator<Product> => {
    return {
        type: 'INSERT_NEW_PRODUCT',
        payload: {
            _id: '1',
            name: 'Cookie',
            price: 0.35,
            stock: 700
        }
    }
}