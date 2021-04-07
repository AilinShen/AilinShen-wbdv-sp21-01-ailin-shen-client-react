import React from 'react'


function MultipleChoiceQuestion({question}){
    return(
        <div className="mt-3">
            <h4>{question.question}</h4>
            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return(
                            <li className={`list-group-item`}>
                                <label>
                                    <input type="radio"
                                           name={question._id}/>
                                    {choice}
                                </label>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


export default MultipleChoiceQuestion