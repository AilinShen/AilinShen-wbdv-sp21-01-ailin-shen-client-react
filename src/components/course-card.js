import {useState} from 'react'
import {Link} from 'react-router-dom'

function CourseCard ({course, onDelete, onSave}) {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(course.title)


    return(
        <div className="col">
            <div className="card">
                <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
                     className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">Some example description.</p>
                    {
                        !editing &&
                        <Link to="/editor" className="btn btn-secondary ">
                            {course.title}
                        </Link>
                    }
                    {
                        editing &&
                        <input
                            onChange={(event) => setNewTitle(event.target.value)}
                            value={newTitle}
                            className="form-control"/>
                    }

                </div>
                {
                    !editing &&
                    <div className="card-body">
                        <a href="#" className="card-link float-right color-me-grey"
                           onClick={() => {setEditing(!editing)}}>
                            <i className="fas fa-edit fa-lg"></i>
                        </a>
                    </div>
                }
                {
                    editing &&
                    <div className="card-body">
                        <span className="float-right">
                            <a href="#" className="card-link color-me-grey"
                               onClick={() => {
                                   onSave({...course, title: newTitle})
                                   setEditing(!editing)
                               }}>
                                <i className="fas fa-check fa-lg"></i>
                            </a>
                            <a href="#" className="card-link color-me-grey"
                               onClick={() => {
                                   onDelete(course._id)
                                   setEditing(!editing)
                               }}>
                                <i className="fas fa-times fa-lg"></i>
                            </a>
                        </span>
                    </div>
                }

            </div>
        </div>

    )
}

export default CourseCard