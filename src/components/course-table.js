import React from "react";
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid content-page">
                <div className="row operation-bar">
                    <div className="col-10 col-md-6 operation-bar-text">
                        Title
                    </div>
                    <div className="col-md-3 col-lg-2 d-none d-md-block d-lg-block d-xl-block operation-bar-text">
                        Owned by
                    </div>
                    <div className="col-3 d-none d-lg-block d-xl-block operation-bar-text">
                        Last modified
                    </div>
                    <div className="col-2 col-md-3 col-lg-1 float-right">
                        <div className="btn-group float-right" role="group" aria-label="Basic example">
                            <button type="button" className="btn"><i className="fa fa-folder"></i></button>
                            <button type="button" className="btn"><i className="fas fa-sort-alpha-up-alt"></i></button>
                            <Link to="/courses/grid" className="btn">
                                <i className="fa fa-th"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <hr className="d-none d-lg-block"/>
                {
                    this.props.courses.map(course => (
                        <CourseRow course={course} onDelete={this.props.onDelete} onSave={this.props.onSave}/>
                    ))
                }

                <button type="button"
                        className="btn add-course-button rounded-circle background-dark-red"
                        onClick={this.props.onAdd}>
                    <i className="fas fa-plus fa-3x color-me-white"></i>
                </button>

            </div>
        )
    }
}
