import {useState} from 'react'
import {Link} from "react-router-dom";

function CourseRow ({course, onDelete, onSave}) {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(course.title)

    return(
             <div className=" row course-tab"  key={course._id}>
                <div className="col-9 col-md-6">
                    {
                        !editing &&
                        <Link to={`/courses/table/edit/${course._id}` } className="btn">
                            <i className="fa fa-file"></i>
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
                <div className="col-md-3 col-lg-2 d-none d-md-block d-lg-block d-xl-block">
                    {course.owner}
                </div>
                <div className="col-2 d-none d-lg-block d-xl-block">
                    {course.lastModified}
                </div>
                 <div className="col-1 d-none d-lg-block d-xl-block">
                     <Link to={`/courses/${course._id}/quizzes`}>
                         Quizzes
                     </Link>
                 </div>
                {
                    !editing &&
                    <div className="col-2 col-md-3 col-lg-1" >
                        <a className="float-right color-me-grey"
                           onClick={() => {
                               setEditing(!editing)
                           }}>
                            <i className="fas fa-edit"></i>
                        </a>
                    </div>
                }
                {
                    editing &&
                    <div className="col-3 col-md-3 col-lg-1" >
                        <span className="float-right">
                            <a className=" color-me-grey"
                               onClick={() => {
                                   onSave({...course, title: newTitle})
                                   setEditing(!editing)
                               } }>
                            <i className="fas fa-check"></i>
                        </a>
                            <a className=" color-me-grey"
                               onClick={() => {
                                   onDelete(course._id)
                                   setEditing(!editing)
                               }}>
                                <i className="fas fa-times"></i>
                            </a>
                        </span>

                    </div>
                }



            </div>

    )
}

export default CourseRow