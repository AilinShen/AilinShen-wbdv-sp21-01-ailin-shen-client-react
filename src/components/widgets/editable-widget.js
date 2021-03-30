import React, {useState} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

function EditableWidget({widget, updateWidget, deleteWidget}){
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
                            <option value={"LIST"}>List</option>
                            <option value={"IMAGE"}>Image</option>
                        </select>
                    </div>
                </form>

            }

            {
                !editing &&
                <i className="fas fa-cog float-right"
                   onClick={()=>{setEditing(!editing)}}>
                </i>

            }
            {
                editingWidget.type === 'HEADING' &&
                <HeadingWidget widget={editingWidget}
                               select ={editing}
                               setEditingWidget={setEditingWidget}/>
            }

            {
                editingWidget.type === 'PARAGRAPH' &&
                <ParagraphWidget widget={editingWidget}
                               select ={editing}
                               setEditingWidget={setEditingWidget}/>
            }
            {
                editingWidget.type === 'LIST' &&
                <ListWidget widget={editingWidget}
                                 select ={editing}
                                 setEditingWidget={setEditingWidget}/>
            }
            {
                editingWidget.type === 'IMAGE' &&
                <ImageWidget widget={editingWidget}
                            select ={editing}
                            setEditingWidget={setEditingWidget}/>
            }


        </>
    )


}

export default EditableWidget