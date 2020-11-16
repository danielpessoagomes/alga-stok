import { stat } from "fs"
import Products, { Product } from "../../shared/Table/Table.mockdata"

export interface ActionCreator<T = any> {
    type: string
    payload?: T
}

// eslint-disable-next-line
export default function (state = Products, action: ActionCreator): Product[] {
    switch (action.type) {
        case 'INSERT_NEW_PRODUCT':
            return [...state, {
                ...action.payload,
                _id: String(state.length  + 1)
            }]
        default:
            return state
    }
}