const UPDATE_SEARCHING_TEXT = 'UPDATE_SEARCHING_TEXT'

let initialState = {
    city: ''
}

export const searchReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_SEARCHING_TEXT: {
            return {
                ...state,
                city: action.city,
            }
        }
        default:
            return state

    }
}

export let updateSearchingText = (city) => ({type: UPDATE_SEARCHING_TEXT, city})

export const searchingCity = (city) => {
    return (dispatch) => {
        dispatch(updateSearchingText(city))
    }
}
