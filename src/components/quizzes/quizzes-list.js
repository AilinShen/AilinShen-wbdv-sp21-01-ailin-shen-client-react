import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import QuizzService from "../../services/quizz-service";

function QuizzesList(){
    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([])
    const quizzService = new QuizzService();

    useEffect(()=>{
        quizzService.findAllQuizzes()
            .then((res)=>setQuizzes(res))
    },[])

    return(
        <div className="content-page container ml-5">
            <h2>Quizzes ({quizzes.length})</h2>
            <ul>
                {
                    quizzes.map((quiz) => {
                        return(
                            <li key={quiz._id} className="list-group-item">
                                {quiz.title}
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                      type="button" className="btn btn-primary btn-sm float-right">
                                    Start
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default QuizzesList