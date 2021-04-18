import React from 'react'
import MultipleChoiceQuestion from "./multiple-choice-question";
import TrueFalseQuestion from "./true-false-question";


function Question({question, updateAnswers}){


    return(
        <div>
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion question={question} updateAnswers={updateAnswers} key={question._id}/>
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion question={question} updateAnswers={updateAnswers} key={question._id}/>
            }
        </div>
    )
}


export default Question