import WidgetService from "../services/widget-service";

const widgetService = new WidgetService();

export const findAllWidgets = (dispatch)=>{
    widgetService.findAllWidgets()
        .then((widgets)=>{
            dispatch({
                type: 'FIND_ALL_WIDGETS',
                payload: widgets
            })
        })
}
export const findWidgetsForTopic = (dispatch,topicId)=>{
    widgetService.findWidgetsForTopic(topicId)
        .then((res)=>{
            dispatch({
                type: "FIND_WIDGETS_FOR_TOPIC",
                payload: res
            })
        })
}

export const clearWidgets = (dispatch)=>{
    dispatch({
        type: "CLEAR_WIDGETS"
    })
}

export const createWidget = (dispatch, topicId)=>{
    widgetService.createWidget(topicId,
        {name:"widget1", type:"HEADING", size:1, text:"Widget 1"})
        .then((res)=>{
            dispatch({
                type: "CREATE_WIDGET",
                payload: res
            })
        })
}

export const updateWidget = (dispatch, newWidget)=>{
    widgetService.updateWidget(newWidget.id, newWidget)
        .then((status)=>{
            dispatch({
                type: "UPDATE_WIDGET",
                payload: newWidget
            })
        })
}
export const deleteWidget = (dispatch, widget)=>{
    widgetService.deleteWidget(widget.id)
        .then((status)=>{
            dispatch({
                type: "DELETE_WIDGET",
                payload: widget
            })
        })
}

const widgetActions = {
    findAllWidgets, findWidgetsForTopic, createWidget, clearWidgets, updateWidget, deleteWidget
}

export default widgetActions