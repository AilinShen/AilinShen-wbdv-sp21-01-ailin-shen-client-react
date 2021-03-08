import CourseCard from "./course-card";
import {Link} from "react-router-dom";

function CourseGrid({courses, onDelete, onSave, onAdd}) {
    return (
        <div className="container-fluid content-page">
            <div className=" operation-bar">
                <div className="row">
                    <div className="col float-right">
                        <div className="btn-group float-right" role="group" aria-label="Basic example">
                            <button type="button" className="btn"><i className="fa fa-folder"></i></button>
                            <button type="button" className="btn"><i className="fas fa-sort-alpha-up-alt"></i></button>
                            <Link to="/courses/table" className="btn">
                                <i className="fas fa-list"></i>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            <div className="cards-container row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                {
                    courses.map(course => (
                        <CourseCard course={course} onSave={onSave} onDelete={onDelete}/>
                    ))
                }

            </div>

            <button type="button"
                    className="btn add-course-button rounded-circle background-dark-red"
                    onClick={onAdd}>
                <i className="fas fa-plus fa-3x color-me-white"></i>
            </button>

        </div>

    )
}

export default CourseGrid