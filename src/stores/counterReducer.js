const initialState = {
    count: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'incremented':
            return {
                ...state,
                count: state.count + 1
            }
        case 'decremented':
            return {
                ...state,
                count: state.count - 1
            }
        case 'incremented5':
            return {
                ...state,
                count: state.count + action.payload
            }
        default:
            return state
    }
}

export default counterReducer