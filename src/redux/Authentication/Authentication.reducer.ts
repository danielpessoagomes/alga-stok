
import { ActionCreator } from "..";
import { User } from "../../services/Authentication.service";

declare interface AuthenticationState {
    profile?: User
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (
    state: AuthenticationState = {}, 
    action: ActionCreator
    ): AuthenticationState {
    switch(action.type){
        case 'AUTHENTICATION_LOGIN':
            return {profile: action.payload}

        case 'AUTHENTICATION_LOGOUT':
            return {}

        default:
            return state
    }
}