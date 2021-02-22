import {useState, useEffect} from 'react'
import CourseService from "../services/course-service"
import CourseTable1 from "./course-table1";
import CourseGrid from "./course-grid";
import {Route} from "react-router-dom";

function CourseManager () {
    const  courseService = new CourseService()

    const [courses, setCourses] = useState([])
    const [newCourseTitle, setNewCourseTitle] = useState("")

    useEffect( ()=>{
      courseService.findAllCourses()
          .then((res)=>{setCourses(res)})
    })

    const onAdd = () => {
        const newCourse = {
            title: newCourseTitle,
            owner: "New Owner",
            lastModified: "2/20/2021"
        }
        courseService.createCourse(newCourse)
            .then(setCourses([...courses, newCourse]))

        setNewCourseTitle("")
    }

    const onDelete = (courseId) => {
        courseService.deleteCourse(courseId)
            .then(
                setCourses(courses.filter((course) => (course._id !== courseId)))
            )
    }

    const onSave = (newCourse) => {
        courseService.updateCourse(newCourse._id, newCourse)
            .then(
                setCourses(courses.map((course) => course._id !== newCourse._id ? course: newCourse))
            )
    }

    return(

        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark background-light-grey">
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
                           value={newCourseTitle}
                           onChange={(e)=>setNewCourseTitle(e.target.value)}/>
                </div>
                <div className="col-2">
                    <button type="button"
                            className="btn rounded-circle background-dark-grey border border-dark"
                            onClick={onAdd}>
                        <i className="fa fa-plus fa-2x color-me-white"></i>
                    </button>
                </div>
            </nav>

            <Route path={"/courses/table"}>
                <CourseTable1 courses={courses} onDelete={onDelete} onSave={onSave}/>
            </Route>

            <Route path={"/courses/grid"}>
                <CourseGrid courses={courses} onDelete={onDelete} onSave={onSave}/>
            </Route>



            <button type="button"
                    className="btn add-course-button rounded-circle background-dark-red"
                    onClick={onAdd}>
                <i className="fas fa-plus fa-3x color-me-white"></i>
            </button>
        </div>
    )
}

export default CourseManager