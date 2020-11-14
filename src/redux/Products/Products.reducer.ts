import Products from "../../shared/Table/Table.mockdata"

export interface ActionCreator<T = any> {
    type: string
    payload?: T
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = Products, action: ActionCreator) {
    switch (action.type) {
        case 'INSERT_NEW_PRODUCT':
            return [...state, action.payload]
        default:
            return state
    }
}