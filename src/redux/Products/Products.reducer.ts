export interface ActionCreator<T = any> {
    type: string
    payload?: T
}

export default function (state = [], action: ActionCreator) {
    switch (action.type) {
        case 'INSERT_NEW_PRODUCT':
            return [...state, action.payload]
        default:
            return state
    }
}