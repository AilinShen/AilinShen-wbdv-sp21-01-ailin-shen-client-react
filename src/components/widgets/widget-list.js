import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {useParams} from "react-router-dom";
import widgetActions from "../../actions/widget-actions";
import EditableWidget from "./editable-widget";


function WidgetList({
                        widgets = [], findAllWidgets,
                        findWidgetsForTopic,
                        clearWidgets,
                        createWidget, updateWidget, deleteWidget
                    }) {

    const {topicId} = useParams();

    useEffect(() => {
        if (topicId !== "undefined" && typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId)

        } else {
            clearWidgets()
        }
    }, [topicId])

    return (
        <div className="container pt-2">
            <button type="button" className="btn float-right"
                    onClick={() => {
                        createWidget(topicId)
                    }}>
                <i className="fas fa-plus fa-2x float-right mb-3"></i>
            </button>

            <ul className="list-group w-100">

                {
                    widgets.map(widget => (
                        <li key={widget.id} className="list-group-item">
                            <EditableWidget
                                        widget={widget}
                                        updateWidget={updateWidget}
                                        deleteWidget={deleteWidget}/>

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