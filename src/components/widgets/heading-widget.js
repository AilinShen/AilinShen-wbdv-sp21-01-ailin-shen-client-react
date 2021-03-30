import React, {useState} from 'react'


function HeadingWidget({widget, select, setEditingWidget}){

    return(
     <>
         {
             select &&

             <>
                 <div className="form-group">
                     <input className="form-control"
                            value={widget.text}
                            onChange={(event)=> {
                                const w = {...widget, text: event.target.value}
                                setEditingWidget(w)
                            }}
                     />
                 </div>
                 <div className="form-group">
                     <select className="form-control"
                             value={widget.size}
                             onChange={(event)=>{
                                 const w = {...widget, size: parseInt(event.target.value)}
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
             !select &&
             <>
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