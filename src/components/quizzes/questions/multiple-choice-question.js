import React, {useState} from 'react'


function MultipleChoiceQuestion({question, updateAnswers}){

    const choiceLength = question.choices.length
    const [answer, setAnswer] = useState("")
    const [graded, setGraded] = useState(false)

    return(
        <div className="mt-3">
            <h4 className="ml-3">
                {question.question}
                {
                    graded &&
                    (answer === question.correct) &&
                    <span className="ml-3" style={{color: "green"}}>
                        <i className="fas fa-check"></i>
                    </span>
                }
                {
                    graded &&
                    (answer !== question.correct) &&
                    <span className="ml-3" style={{color: "red"}}>
                        <i className="fas fa-times"></i>
                    </span>
                }

            </h4>
            <ul className="list-group">

                {
                    question.choices.map((choice, i) => {
                        return(
                            <li className={`list-group-item w-50 
                            ${ (graded && (question.correct === choice)) ? "background-green":"" }
                            ${ (graded && (question.correct !== choice) && (answer === choice)) ? "background-red":"" }`
                            }>
                                <label>
                                    <input type="radio"
                                           onClick={() => {
                                               setGraded(false)
                                               setAnswer(choice)
                                               updateAnswers(question._id, choice)
                                           }}
                                           name={question._id}/>
                                    {choice}
                                </label>
                                {
                                    (graded && (question.correct === choice)) &&
                                    <span className="ml-3" style={{color: "green"}}>
                                        <i className="fas fa-check float-right"></i>
                                    </span>
                                }

                                {
                                    (graded && (question.correct !== choice) && (answer === choice)) &&
                                    <span className="ml-3" style={{color: "red"}}>
                                        <i className="fas fa-times float-right"></i>
                                    </span>
                                }

                            </li>
                        )
                    })
                }

            </ul>

            <h6 className="m-4">Your answer: { (answer!== "") && answer}</h6>
            <button type="button" className="btn btn-success ml-4 mb-3"
                    onClick={()=>{setGraded(true)}}>
                Grade
            </button>

        </div>
    )
}


export default MultipleChoiceQuestion