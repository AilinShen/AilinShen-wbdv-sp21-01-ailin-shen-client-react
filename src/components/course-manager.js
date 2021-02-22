import React from 'react'
import CourseService from "../services/course-service"
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import {Route, Switch} from "react-router-dom";

export default class CourseManager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            newCourseTitle: ""
        };
        this.courseService = new CourseService();
    }

    componentDidMount() {
        this.courseService.findAllCourses()
            .then(courses => this.setState({courses: courses}))
    }

    onAdd = () => {
        const newCourse = {
            title: this.state.newCourseTitle,
            owner: "New Owner",
            lastModified: "2/20/2021"
        }
        this.courseService.createCourse(newCourse)
            .then(actualCourse => {
                this.state.courses.push(actualCourse)
                this.setState({
                    courses: this.state.courses,
                    newCourseTitle: ""
                })
            })

    }

    onDelete = (courseId) => {
        this.courseService.deleteCourse(courseId)
            .then(status => {
                this.setState((prevState) => ({
                    courses: prevState.courses.filter(c => c._id !== courseId)
                }))
            })
    }

    onSave = (newCourse) => {
        this.courseService.updateCourse(newCourse._id, newCourse)
            .then(status => {
                this.setState(prevState => {
                    let nextState = {...prevState}
                    nextState.courses = prevState.courses.map(
                        (course) => course._id !== newCourse._id ? course : newCourse
                    )
                    return nextState
                })
            })
    }

    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-dark background-light-grey fixed-navbar">
                    <div className="col-1 dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>

                    <div className="col-2 navbar-brand d-none d-lg-block">
                        <h4 className="color-me-white">Course Manager</h4>
                    </div>
                    <div className="col-7">
                        <input className="form-control"
                               placeholder="New Course Title"
                               value={this.state.newCourseTitle}
                               onChange={(e) => this.setState({newCourseTitle: e.target.value})}/>
                    </div>
                    <div className="col-2">
                        <button type="button"
                                className="btn rounded-circle background-dark-grey border border-dark"
                                onClick={this.onAdd}>
                            <i className="fa fa-plus fa-2x color-me-white"></i>
                        </button>
                    </div>
                </nav>

                <Switch>
                    <Route path={"/courses/table"}>
                        <CourseTable courses={this.state.courses} onDelete={this.onDelete} onSave={this.onSave}/>
                    </Route>
                    <Route path={"/courses/grid"}>
                        <CourseGrid courses={this.state.courses} onDelete={this.onDelete} onSave={this.onSave}/>
                    </Route>
                    <Route path={"/courses"}>
                        <CourseTable courses={this.state.courses} onDelete={this.onDelete} onSave={this.onSave}/>
                    </Route>
                </Switch>



                <button type="button"
                        className="btn add-course-button rounded-circle background-dark-red"
                        onClick={this.onAdd}>
                    <i className="fas fa-plus fa-3x color-me-white"></i>
                </button>
            </div>
        );
    }

}
