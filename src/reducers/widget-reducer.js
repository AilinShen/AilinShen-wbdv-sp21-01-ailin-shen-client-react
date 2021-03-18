const initialState = {
    widgets: []
}


const widgetReducer = (state=initialState, action) => {

     switch (action.type) {
         case "FIND_ALL_WIDGETS":
             return {
                 ...state,
                 widgets: action.payload
             }
         case "CREATE_WIDGET":
             return {
                 ...state,
                 widgets: [...state.widgets, action.payload],
             }
         case "FIND_WIDGETS_FOR_TOPIC":
             return {
                 ...state,
                 widgets: action.payload
             }
         case "CLEAR_WIDGETS":
             return {
                 ...state,
                 widgets: []
             }
         case "UPDATE_WIDGET":
             return {
                 ...state,
                 widgets: state.widgets.map((w) => {
                     if (w.id === action.payload.id) {
                         return action.payload
                     }else {
                         return w
                     }
                 })
             }
         case "DELETE_WIDGET":
             return {
                 ...state,
                 widgets: state.widgets.filter(w => w.id !== action.payload.id)
             }
         default:
             return state
     }
}


export default widgetReducer