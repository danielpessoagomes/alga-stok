export interface ActionCreator<T = any> {
    type: string
    payload?: T
}

// eslint-disable-next-line
export default function (state = [], action: ActionCreator) {
    switch (action.type) {
        case 'INSERT_NEW_PRODUCT':
            return [...state, action.payload]
        default:
            return state
    }
}