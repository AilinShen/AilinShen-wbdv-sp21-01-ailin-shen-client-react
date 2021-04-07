import React, {useState} from 'react'

function TrueFalseQuestion({question}){
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
                <li className={`list-group-item w-50 
                ${ (graded && (question.correct === "true")) ? "background-green":"" }
                ${ (graded && (question.correct !== "true") && (answer === "true")) ? "background-red":"" }`}>
                    <label>
                        <input
                            type="radio"
                            onClick={() => {
                                setGraded(false)
                                setAnswer("true")
                            }}
                            name={question._id}/>
                        TRUE
                    </label>

                    {
                        (graded && (question.correct === "true")) &&
                        <span className="ml-3" style={{color: "green"}}>
                            <i className="fas fa-check float-right"></i>
                        </span>
                    }

                    {
                        (graded && (question.correct !== "true") && (answer === "true")) &&
                        <span className="ml-3" style={{color: "red"}}>
                            <i className="fas fa-times float-right"></i>
                        </span>
                    }
                </li>


                <li className={`list-group-item w-50 
                ${ (graded && (question.correct === "false")) ? "background-green":"" }
                ${ (graded && (question.correct !== "false") && (answer === "false")) ? "background-red":"" }`}>
                    <label>
                        <input
                            type="radio"
                            onClick={() => {
                                setGraded(false)
                                setAnswer("false")
                            }}
                            name={question._id}/>
                        FALSE
                    </label>
                    {
                        (graded && (question.correct === "false")) &&
                        <span className="ml-3" style={{color: "green"}}>
                            <i className="fas fa-check float-right"></i>
                        </span>
                    }

                    {
                        (graded && (question.correct !== "false") && (answer === "false")) &&
                        <span className="ml-3" style={{color: "red"}}>
                            <i className="fas fa-times float-right"></i>
                        </span>
                    }
                </li>

            </ul>


            <h6 className="m-4">Your answer: { (answer!== "") && answer}</h6>
            <button type="button"
                    className="btn btn-success ml-4 mb-3"
                    onClick={()=>{setGraded(true)}}>
                Grade
            </button>

        </div>
    )
}

export default TrueFalseQuestion