import React, {useState} from 'react'


function HeadingWidget({widget, updateWidget, deleteWidget}){

    const [editing, setEditing] = useState(false)
    const [editingWidget, setEditingWidget] = useState(widget);

    return(
     <>
         {
             editing &&
             <form>
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
                 <div className="form-group">
                     <select className="form-control"
                             value={editingWidget.type}
                             onChange={(event)=>{
                                 setEditingWidget({...editingWidget, type: event.target.value})
                             }}
                     >
                         <option value={"HEADING"}>Heading</option>
                         <option value={"PARAGRAPH"}>Paragraph</option>
                     </select>
                 </div>

                 {
                     editingWidget.type === 'HEADING' &&
                         <>
                             <div className="form-group">
                                 <input className="form-control"
                                        value={editingWidget.text}
                                        onChange={(event)=> {
                                            const w = {...editingWidget, text: event.target.value}
                                            setEditingWidget(w)
                                        }}
                                 />
                             </div>

                             <div className="form-group">
                                 <select className="form-control"
                                         value={editingWidget.size}
                                         onChange={(event)=>{
                                             const w = {...editingWidget, size: parseInt(event.target.value)}
                                             setEditingWidget(w)
                                         }}
                                 >
                                     <option value={1}>Heading 1</option>
                                     <option value={2}>Heading 2</option>
                                     <option value={3}>Heading 3</option>
                                     <option value={4}>Heading 4</option>
                                     <option value={5}>Heading 5</option>
                                     <option value={6}>Heading 6</option>
                                 </select>
                             </div>
                         </>
                 }
                 {
                     editingWidget.type === 'PARAGRAPH' &&
                     <div className="form-group">
                                <textarea value={editingWidget.text}
                                          onChange={(event)=> {
                                              setEditingWidget({...editingWidget, text: event.target.value})
                                          }}
                                >
                                </textarea>
                     </div>
                 }

             </form>

         }
         {
             !editing &&
             <>
                 <i className="fas fa-cog float-right"
                    onClick={()=>{setEditing(!editing)}}>
                 </i>
                 { widget.size === 1 && <h1>{widget.text}</h1> }
                 { widget.size === 2 && <h2>{widget.text}</h2> }
                 { widget.size === 3 && <h3>{widget.text}</h3> }
                 { widget.size === 4 && <h4>{widget.text}</h4> }
                 { widget.size === 5 && <h5>{widget.text}</h5> }
                 { widget.size === 6 && <h6>{widget.text}</h6> }
             </>
         }
     </>
    )
}

export default HeadingWidget