import React, {useState} from 'react'


function ParagraphWidget({widget, select, setEditingWidget}){


    return(
        <p>
            {
                select &&
                <form>
                    <div className="form-group">
                        <textarea value={widget.text}
                                  onChange={(event)=> {
                                      setEditingWidget({...widget, text: event.target.value})
                                  }}
                        >
                        </textarea>
                    </div>



                </form>

            }

            {
                !select &&
                 <p>
                     {widget.text}
                 </p>

            }
        </p>
    )
}

export default ParagraphWidget