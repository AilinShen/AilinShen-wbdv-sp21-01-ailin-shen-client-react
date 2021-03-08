import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import moduleReducer from "../reducers/module-reducer";
import lessonReducer from "../reducers/lesson-reducer";
import topicReducer from "../reducers/topic-reducer";
import {createStore, combineReducers} from 'redux'
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import CourseService from "../services/course-service";



const combinedReducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer
})
const store = createStore(combinedReducer)


function CourseEditor ({history}) {
    const {layout, courseId} = useParams();
    const [courseTitle, setCourseTitle] = useState("");
    const courseService = new CourseService();

    useEffect(()=>{
        courseService.findCourseById(courseId)
            .then((res)=>{setCourseTitle(res.title)})
    }, []);

    return(
        <Provider store={store}>
            <div className="container-fluid">
                <div className="background-light-grey fixed-navbar">
                    <div className="row">
                        <Link to={`/courses/${layout}`} className="btn btn-lg">
                            <i className="fas fa-times color-me-white"></i>
                        </Link>
                        <h3 className="color-me-white">{courseTitle}</h3>
                    </div>
                </div>

                <div className="row content-page">
                    <div className="col-3 flex-column content-padding bd-sidebar">
                        <ModuleList />
                    </div>

                    <div className="col-9 content-padding">
                        <LessonTabs />
                        <br />
                        <TopicPills />


                    </div>
                </div>

            </div>
        </Provider>

    )
}

export default CourseEditor