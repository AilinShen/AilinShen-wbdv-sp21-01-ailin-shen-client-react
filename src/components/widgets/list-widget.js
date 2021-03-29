import React, {useState} from 'react'

function ListWidget({widget, updateWidget, deleteWidget}){
    const [editing, setEditing] = useState(false)
    const [editingWidget, setEditingWidget] = useState(widget);

    return(
        <>
            {
                editing &&
                    <>
                        <i className="fas fa-trash float-right mr-3 mb-2"
                           onClick={()=>{
                               deleteWidget(widget)
                               setEditing(!editing)
                           }}>
                        </i>
                        <i className="fas fa-check float-right mr-2 mb-2"
                           onClick={()=>{
                               updateWidget(editingWidget)
                               setEditing(!editing)
                           }}>
                        </i>
                        <input checked={editingWidget.widgetOrder===1} type="checkbox"
                               onChange={(e)=>{
                                   console.log(e.target.checked)
                                   if (e.target.checked){
                                       const w = {...editingWidget, widgetOrder: 1};
                                       setEditingWidget(w);
                                   }else {
                                       const w = {...editingWidget, widgetOrder: 0};
                                       setEditingWidget(w);
                                   }
                               }}/>Ordered
                        <br/>
                        List Items
                        <textarea rows={10}
                                  className="form-control"
                                  value={editingWidget.text}
                                  onChange={(event)=> {
                                      const w = {...editingWidget, text: event.target.value}
                                      setEditingWidget(w)
                                  }}
                        />
                    </>
            }
            {
                !editing &&
                    <>
                        <i className="fas fa-cog float-right"
                           onClick={()=>{setEditing(!editing)}}>
                        </i>
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