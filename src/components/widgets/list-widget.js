import React, {useState} from 'react'

function ListWidget({widget, select, setEditingWidget}){

    return(
        <>
            {
                select &&
                    <>
                        <input checked={widget.widgetOrder===1} type="checkbox"
                               onChange={(e)=>{
                                   console.log(e.target.checked)
                                   if (e.target.checked){
                                       const w = {...widget, widgetOrder: 1};
                                       setEditingWidget(w);
                                   }else {
                                       const w = {...widget, widgetOrder: 0};
                                       setEditingWidget(w);
                                   }
                               }}/>Ordered
                        <br/>
                        List Items
                        <textarea rows={10}
                                  className="form-control"
                                  value={widget.text}
                                  onChange={(event)=> {
                                      const w = {...widget, text: event.target.value}
                                      setEditingWidget(w)
                                  }}
                        />
                    </>
            }
            {
                !select &&
                    <>
                        {
                            (widget.widgetOrder===0) &&
                            <ul>
                                {
                                    widget.text.split("\n").map((e)=> <li>{e}</li>)
                                }
                            </ul>
                        }
                        {
                            (widget.widgetOrder===1) &&
                            <ol>
                                {
                                    widget.text.split("\n").map((e)=> <li>{e}</li>)
                                }
                            </ol>
                        }

                    </>
            }
        </>
    )
}

export default ListWidget