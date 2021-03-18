import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetActions, {createWidget} from "../../actions/widget-actions";



// widget service which is talking to the server
function WidgetList({widgets = [], findAllWidgets,
                        findWidgetsForTopic,
                        clearWidgets,
                        createWidget, updateWidget, deleteWidget
                    }) {

    const {topicId} = useParams();
    const [editingWidget, setEditingWidget] = useState({});

    useEffect(()=> {
        if (topicId !== "undefined" && typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId)

        } else {
            clearWidgets()
        }
    }, [topicId])

    return(
        <div className="container pt-2">
            <button type="button" className="btn float-right"
                    onClick={()=>{createWidget(topicId)}}>
                <i className="fas fa-plus fa-2x float-right mb-3"></i>
            </button>

            <ul className="list-group w-100">

                {
                    widgets.map(widget => (
                        <li key={widget.id} className="list-group-item">

                            {
                                widget.type === 'HEADING' &&
                                    <HeadingWidget
                                        widget={widget}
                                        updateWidget={updateWidget}
                                        deleteWidget={deleteWidget}
                                    />
                            }
                            {
                                widget.type === 'PARAGRAPH' &&
                                <ParagraphWidget
                                    widget={widget}
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}
                                />
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
const stateToPropMapper = (state) => {
    return {
        widgets: state.widgetReducer.widgets,
    }
}
// const dispatchToPropMapper = (dispatch) => {
//     const widgetService = new WidgetService();
//     return {
//         findAllWidgets: ()=>{
//             widgetService.findAllWidgets()
//                 .then((widgets)=>{
//                     dispatch({
//                         type: 'FIND_ALL_WIDGETS',
//                         payload: widgets
//                     })
//                 })
//         },
//         findWidgetsForTopic: (topicId)=>{
//             widgetService.findWidgetsForTopic(topicId)
//                 .then((res)=>{
//                     dispatch({
//                         type: "FIND_WIDGETS_FOR_TOPIC",
//                         payload: res
//                     })
//                 })
//         },
//         clearWidgets: ()=>{
//             dispatch({
//                 type: "CLEAR_WIDGETS"
//             })
//         },
//         createWidget: (topicId)=>{
//             widgetService.createWidget(topicId,
//                 {name:"widget1", type:"HEADING", size:1, text:"Widget 1"})
//                 .then((res)=>{
//                     dispatch({
//                         type: "CREATE_WIDGET",
//                         payload: res
//                     })
//                 })
//         },
//         updateWidget: (newWidget)=>{
//             widgetService.updateWidget(newWidget.id, newWidget)
//                 .then((status)=>{
//                     dispatch({
//                         type: "UPDATE_WIDGET",
//                         payload: newWidget
//                     })
//                 })
//         },
//         deleteWidget: (widget)=>{
//             widgetService.deleteWidget(widget.id)
//                 .then((status)=>{
//                     dispatch({
//                         type: "DELETE_WIDGET",
//                         payload: widget
//                     })
//                 })
//         }
//     }
// }

const dispatchToPropMapper = (dispatch) => {
    return {
        findAllWidgets: () => widgetActions.findAllWidgets(dispatch),
        findWidgetsForTopic: (topicId) => widgetActions.findWidgetsForTopic(dispatch, topicId),
        createWidget: (topicId) => widgetActions.createWidget(dispatch, topicId),
        clearWidgets: () => widgetActions.clearWidgets(dispatch),
        updateWidget: (newWidget) => widgetActions.updateWidget(dispatch, newWidget),
        deleteWidget: (widget) => widgetActions.deleteWidget(dispatch, widget)
    }
}
export default connect(stateToPropMapper, dispatchToPropMapper)(WidgetList)