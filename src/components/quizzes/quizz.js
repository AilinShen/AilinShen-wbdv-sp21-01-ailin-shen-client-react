import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import QuestionService from "../../services/question-service";
import Question from "./questions/question";

function Quizz(){
    const {quizId} = useParams();
    const [questions, setQuestions] = useState([])
    // useEffect(()=>{
    //     const service = new QuestionService();
    //     service.findQuestionsForQuiz(quizId)
    //         .then((res)=>setQuestions(res))
    // }, [])

    useEffect(()=>{
        setQuestions([
            {
                "_id": "123",
                "title": "JPA True False",
                "quizId": "234",
                "question": "JPA stands for Java Persistence API",
                "correct": "true",
                "type": "TRUE_FALSE"
            },
            {
                "_id": "234",
                "title": "JPA Multiple Choice",
                "quizId": "234",
                "question": "What does JPA stand for?",
                "correct": "Java Persistence API",
                "type": "MULTIPLE_CHOICE",
                "choices": [
                    "Java Pseudo API",
                    "Java Persistence API",
                    "JSON Persistence API",
                    "JavaScript Persistence API"
                ]
            }])
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