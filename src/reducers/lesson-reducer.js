const initialState = {
    lessons: []
}

const lessonReducer = (state=initialState, action) => {
    switch (action.type){

        case "CREATE_LESSON":
            return {
                ...state,
                lessons: [...state.lessons, action.payload],
            }
        case "FIND_LESSONS_FOR_MODULE":
            return {
                ...state,
                lessons: action.payload
            }
        case "UPDATE_LESSON":
            return {
                ...state,
                lessons: state.lessons.map((lesson) => {
                    if (lesson._id === action.payload._id) {
                        return action.payload
                    }else {
                        return lesson
                    }
                })
            }
        case "DELETE_LESSON":
            return {
                ...state,
                lessons: state.lessons.filter(lesson => lesson._id !== action.payload._id)
            }
        case "CLEAR_LESSONS":
            return {lessons: []}
        default:
            return state

    }
}

export default lessonReducer