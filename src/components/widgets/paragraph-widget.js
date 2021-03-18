import React, {useState} from 'react'


function ParagraphWidget({widget, updateWidget, deleteWidget}){

    const [editing, setEditing] = useState(false)
    const [editingWidget, setEditingWidget] = useState(widget);

    return(
        <p>
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

                </form>

            }

            {
                !editing &&
                <>
                    <i className="fas fa-cog float-right"
                       onClick={()=>{setEditing(!editing)}}>
                    </i>
                    <p>
                        {widget.text}
                    </p>
                </>

            }
        </p>
    )
}

export default ParagraphWidget