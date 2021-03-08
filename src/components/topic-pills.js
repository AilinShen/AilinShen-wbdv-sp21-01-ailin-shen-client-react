import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import TopicService from "../services/topic-service";


function TopicPills({topics = [],
                        createTopic,
                        deleteTopic,
                        updateTopic,
                        findTopicsForLesson,
                        clearTopics
                    }) {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();

    useEffect(()=>{
        if (lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }else {
            clearTopics()
        }
    },[lessonId]);

    return(

        <ul className="nav nav-pills">

            {
                topics.map(topic => (
                    <li className="nav-item" key={topic._id}>
                            <EditableItem item={topic}
                                          updateItem={updateTopic}
                                          deleteItem={deleteTopic}
                                          to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                          active={topic._id===topicId}
                            />
                    </li>
                ))
            }

            <li className="nav-item">
                <a className="nav-link color-me-grey" href="#">
                    <i className="fas fa-plus fa-2x"
                        onClick={()=>{
                            if (lessonId !== "undefined" && typeof lessonId !== "undefined"){
                                createTopic(lessonId)
                            } else{
                                alert("Please select a Lesson")
                            }
                        }}
                    >
                    </i>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link " href="#">

                </a>
            </li>
        </ul>
    )
}

const stateToPropMapper = (state) => {
    return {
        topics: state.topicReducer.topics,
    }
}
const dispatchToPropMapper = (dispatch) => {
    const topicService = new TopicService();
    return {
        createTopic: (lessonId)=> {
            topicService.createTopic(lessonId, {title: "New Topic"})
                .then((theTopic)=>{
                    dispatch({
                        type: "CREATE_TOPIC",
                        payload: theTopic
                    })
                })
        },
        updateTopic: (newTopic)=>{
            topicService.updateTopic(newTopic._id, newTopic)
                .then((status) => {
                    dispatch({
                        type: "UPDATE_TOPIC",
                        payload: newTopic
                    })
                })
        },
        deleteTopic: (topic)=>{
            topicService.deleteTopic(topic._id)
                .then((status)=>{
                    dispatch({
                        type: "DELETE_TOPIC",
                        payload: topic
                    })
                })
        },
        findTopicsForLesson: (lessonId)=>{
            topicService.findTopicsForLesson(lessonId)
                .then((theTopics)=>{
                    dispatch({
                        type: 'FIND_TOPICS_FOR_LESSON',
                        payload: theTopics
                    })
                })
        },
        clearTopics: ()=>{
            dispatch({
                type: "CLEAR_TOPICS"
            })
        }
    }
}
export default connect(stateToPropMapper, dispatchToPropMapper)(TopicPills)