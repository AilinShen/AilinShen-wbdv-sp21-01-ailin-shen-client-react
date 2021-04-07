import React from 'react'

function TrueFalseQuestion({question}){
    return(
        <div className="mt-3">
            <h4>{question.question}</h4>
            <ul>
                <input type="radio" id="male" name="gender" value="male"/>
                <label htmlFor="male">Male</label><br/>
                <input type="radio" id="male" name="gender" value="male"/>
                <label htmlFor="male">Male</label><br/>
            </ul>
        </div>
    )
}

export default TrueFalseQuestion