import { ActionCreator } from ".."
import Products, { Product } from "../../shared/Table/Table.mockdata"

export default function (state = Products, action: ActionCreator): Product[] {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return [...action.payload]

        default:
            return state
    }
}