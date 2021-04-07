import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import QuestionService from "../../services/question-service";
import Question from "./questions/question";

function Quizz(){
    const {quizId} = useParams();
    const [questions, setQuestions] = useState([])
    useEffect(()=>{
        const service = new QuestionService();
        service.findQuestionsForQuiz(quizId)
            .then((res)=>setQuestions(res))
    }, [])


    return(
        <div className="container content-page">
            <h3>Quiz {quizId} ({questions.length})</h3>
            <ul>
                {
                    questions.map((question) => {
                        return(
                            <li>
                               <Question question={question}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Quizz