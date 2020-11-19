import { ActionCreator } from ".."
import { Product } from "../../shared/Table/Table.mockdata"

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state: Product[] = [], action: ActionCreator): Product[] {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return [...action.payload]

        default:
            return state
    }
}