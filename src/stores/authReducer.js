const initialState = {
    login: true,
    user: null
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                login: action.payload
            }
        case 'logout':
            return {
                ...state,
                login: action.payload
            }
        case 'getInfo':
            return {
                ...state,
                info: action.payload.user
            }
        default:
            return false
    }
}