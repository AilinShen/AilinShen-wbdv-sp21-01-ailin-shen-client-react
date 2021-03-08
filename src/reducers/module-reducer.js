const initialState = {
    modules: []
}

const moduleReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_MODULE":
            return {
                modules: [...state.modules, action.payload],
            }
        case "FIND_MODULES_FOR_COURSE":
            return {
                modules: action.payload
            }
        case "UPDATE_MODULE":
            return {
                modules: state.modules.map((module) => {
                    if (module._id === action.payload._id) {
                        return action.payload
                    }else {
                        return module
                    }
                })
            }
        case "DELETE_MODULE":
            return {
                modules: state.modules.filter(module => module._id !== action.payload._id)
            }
        default:
            return state
    }

}

export default moduleReducer