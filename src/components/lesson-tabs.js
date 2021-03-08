import React,{useEffect} from "react";
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import EditableItem from "./editable-item";
import LessonService from "../services/lesson-service";

function LessonTabs ({lessons = [],
                         deleteLesson,
                         updateLesson,
                         createLesson,
                         findLessonsForModule,
                         clearLessons
                     }){
    const {layout, courseId, moduleId, lessonId} = useParams();
    useEffect(()=>{
        if(moduleId !== "undefined" && typeof moduleId !== "undefined"){
            findLessonsForModule(moduleId);
        }else{
            clearLessons()
        }
    }, [moduleId]);

    return(
        <ul className="nav nav-tabs">


            {
                lessons.map(lesson => (
                    <li className="nav-item" key={lesson._id}>
                            <EditableItem item={lesson}
                                          deleteItem={deleteLesson}
                                          updateItem={updateLesson}
                                          to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                          active={lessonId === lesson._id}
                            />
                    </li>
                ))
            }
            <li className="nav-item">
                <a className="nav-link color-me-grey" href="#">
                    <i className="fas fa-plus fa-2x"
                        onClick={()=>{
                            if (moduleId !== "undefined" && typeof moduleId !== "undefined"){
                                createLesson(moduleId)
                            }else {
                                alert("Please select a Module")
                            }
                        }}
                    >
                    </i>
                </a>
            </li>
        </ul>
    )
}

const stateToPropMapper = (state) => {
    return {
        lessons: state.lessonReducer.lessons,
    }
}

const dispatchToPropMapper = (dispatch)=> {
    const lessonService = new LessonService();
    return {
        findLessonsForModule: (moduleId) => {
            lessonService.findLessonsForModule(moduleId)
                .then((theLessons)=>{
                    dispatch({
                        type: "FIND_LESSONS_FOR_MODULE",
                        payload: theLessons
                    })
                })
        },
        createLesson: (moduleId)=>{
            lessonService.createLesson(moduleId, {title: "New Lesson"})
                .then((theLesson)=>{
                    dispatch({
                        type: "CREATE_LESSON",
                        payload: theLesson
                    })
                })
        },
        updateLesson: (lesson)=>{
            lessonService.updateLesson(lesson._id, lesson)
                .then((status)=>{
                    dispatch({
                        type: "UPDATE_LESSON",
                        payload: lesson
                    })
                })
        },
        deleteLesson: (lesson)=>{
            lessonService.deleteLesson(lesson._id)
                .then((status)=>{
                    dispatch({
                        type: "DELETE_LESSON",
                        payload: lesson
                    })
                })
        },
        clearLessons: ()=>{
            dispatch({
                type: "CLEAR_LESSONS"
            })
        }
    }
}

export default connect(stateToPropMapper, dispatchToPropMapper)(LessonTabs)