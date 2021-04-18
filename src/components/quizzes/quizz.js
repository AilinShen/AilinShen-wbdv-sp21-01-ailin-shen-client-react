import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import QuestionService from "../../services/question-service";
import Question from "./questions/question";
import QuizzService from "../../services/quizz-service";

function Quizz(){
    const {quizId} = useParams();
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([])

    useEffect(()=>{
        const service = new QuestionService();
        service.findQuestionsForQuiz(quizId)
            .then((res)=>{
                setQuestions(res);
                setAnswers(res.map((e)=> {
                    return {...e, answer: ""};
                }));
            })
    }, [])

    const updateAnswers = (id, value) =>{

        const newAnswers = answers.map((eachAnswer)=> {
            if (eachAnswer._id === id) {
                return {...eachAnswer, answer: value}
            }
            return eachAnswer;
        })
        setAnswers(newAnswers)
    }

    const submitQuiz = ()=>{
        const service = new QuizzService();
        service.submitQuiz(quizId, answers)
            .then((res)=>alert("Your score is " + res["score"]))
    }

    return(
        <div className="container content-page">
            <h3>Quiz {quizId} ({questions.length})</h3>
            <ul>
                {
                    questions.map((question) => {
                        return(
                            <li>
                               <Question question={question} updateAnswers={updateAnswers} key={question._id}/>
                            </li>
                        )
                    })
                }
            </ul>
            <button type="button" className="btn btn-primary ml-5 mb-3"
                    onClick={()=>{submitQuiz()}}>
                Submit Your Quiz
            </button>
        </div>
    )
}

export default Quizz