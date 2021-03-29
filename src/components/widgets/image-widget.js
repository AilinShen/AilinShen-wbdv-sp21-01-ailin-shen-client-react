import React, {useState} from 'react'

function ImageWidget({widget, updateWidget, deleteWidget}){
    const [editing, setEditing] = useState(false)
    const [editingWidget, setEditingWidget] = useState(widget);

    return(
        <>
            {
                !editing &&
                    <>
                        <i className="fas fa-cog float-right"
                           onClick={()=>{setEditing(!editing)}}>
                        </i>
                        <img src={widget.url} width={widget.width} height={widget.height}/>
                    </>
            }
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
                        <br/>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Image URL</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                   value={editingWidget.url}
                                   onChange={(event)=> {
                                       setEditingWidget({...editingWidget, url: event.target.value})
                                   }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Image Width</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                   value={editingWidget.width}
                                   onChange={(event)=> {
                                       setEditingWidget({...editingWidget, width: event.target.value})
                                   }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Image Height</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                   value={editingWidget.height}
                                   onChange={(event)=> {
                                       setEditingWidget({...editingWidget, height: event.target.value})
                                   }}
                            />
                        </div>

                    </form>
            }
        </>
    )
}

export default ImageWidget