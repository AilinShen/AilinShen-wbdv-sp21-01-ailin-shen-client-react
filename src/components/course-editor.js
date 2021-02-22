import {Link} from "react-router-dom";

function CourseEditor ({history}) {
    return(
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark background-light-grey fixed-navbar">

                <div className="col-3 navbar-brand d-none d-lg-block">
                    <a href="#"><i className="fas fa-times color-me-white"></i></a>
                    <span className="color-me-white">CS6650 Web Dev</span>
                </div>

                <button className="navbar-toggler float-right"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavElements"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavElements">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Build</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Pages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Theme</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Store</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Apps</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Settings</a>
                        </li>
                    </ul>
                </div>
                <div className="col-1 float-right">
                    <a href="#">
                        <i className="fa fa-plus fa-lg color-me-white"></i>
                    </a>
                </div>
            </nav>

            <div className="row content-page">

                <div className="col-3 flex-column background-dark-grey content-padding bd-sidebar">
                    <ul className="list-group">
                        <li className="list-group-item module-tab">
                            Module 1 - jQuery
                            <a href="#">
                                <i className="fas fa-times fa-lg float-right color-me-white"></i>
                            </a>
                        </li>
                        <li className="list-group-item module-tab">
                            Module 2 - React
                            <a href="#">
                                <i className="fas fa-times fa-lg float-right color-me-white"></i>
                            </a>
                        </li>
                        <li className="list-group-item module-tab">
                            Module 3 - Redux
                            <a href="#">
                                <i className="fas fa-times fa-lg float-right color-me-white"></i>
                            </a>
                        </li>
                        <li className="list-group-item module-tab">
                            Module 4 - Native
                            <a href="#">
                                <i className="fas fa-times fa-lg float-right color-me-white"></i>
                            </a>
                        </li>
                        <li className="list-group-item module-tab">
                            Module 5 - Angular
                            <a href="#">
                                <i className="fas fa-times fa-lg float-right color-me-white"></i>
                            </a>
                        </li>
                        <li className="list-group-item module-tab">
                            Module 6 - Node
                            <a href="#">
                                <i className="fas fa-times fa-lg float-right color-me-white"></i>
                            </a>
                        </li>
                        <li className="list-group-item module-tab">
                            Module 7 - Mongo
                            <a href="#">
                                <i className="fas fa-times fa-lg float-right color-me-white"></i>
                            </a>
                        </li>

                        <br/>
                    </ul>

                    <button type="button"
                            className="btn add-module-button rounded-circle">
                        <i className="fas fa-plus fa-2x color-me-white"></i>
                    </button>

                </div>
                <div className="col-9 content-padding">
                    <ul className="nav nav-pills">
                        <li className="nav-item topic-pill ">
                            <a className="nav-link text-white font-weight-bolder" href="#">Topic 1</a>
                        </li>
                        <li className="nav-item topic-pill">
                            <a className="nav-link text-white font-weight-bolder" href="#">Topic 2</a>
                        </li>
                        <li className="nav-item topic-pill">
                            <a className="nav-link text-white font-weight-bolder" href="#">Topic 3</a>
                        </li>
                        <li className="nav-item topic-pill">
                            <a className="nav-link text-white font-weight-bolder" href="#">Topic 4</a>
                        </li>
                        <li className="nav-item topic-pill">
                            <a className="nav-link" href="#"><i className="fa fa-plus color-me-white"></i></a>
                        </li>

                    </ul>

                    <div className="row">
                        <button className="col-3 btn btn-danger" onClick={() => history.goBack()}>Go Back</button>
                        <Link to="/" className="col-3 btn btn-primary">Home Page</Link>
                        <Link to="/courses" className="col-3 btn btn-info">Course Manager</Link>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default CourseEditor