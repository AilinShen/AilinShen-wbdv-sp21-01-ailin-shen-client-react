import React from "react";
import {useState} from 'react'
import {Link} from "react-router-dom";

function EditableItem ({
                           item = {title: "Some Title", _id: "ABC"},
                           updateItem = (newTitle)=>{alert(newTitle)},
                           deleteItem = ()=>{alert("DELETE")},
                           to='/somewhere/go',
                           active = false
                       }) {

    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(item.title)

    return(
        <>
            {
                !editing &&
                <a className={`nav-link color-me-grey ${active ? "active" : ""}`} href="#">
                    <Link to={to} className="color-me-grey">
                        {item.title}
                    </Link>
                    <a className="btn float-right pt-0" onClick={()=>{setEditing(!editing)}}>
                        <i className="fas fa-edit"></i>
                    </a>
                </a>
            }

            {
                editing &&
                <a className={`nav-link color-me-grey active`} href="#">
                    <input
                        value = {newTitle}
                        onChange={(event)=>setNewTitle(event.target.value)}
                    />
                    <span className="float-right pt-0">
                        <a className="btn"
                           onClick={()=>{
                               const newItem = {...item, title: newTitle}
                               updateItem(newItem)
                               setEditing(!editing)}}
                        >
                            <i className="fas fa-check"></i>
                        </a>
                        <a className="btn"
                           onClick={()=>{
                               deleteItem(item)
                               setEditing(!editing)}
                           }
                        >
                            <i className="fas fa-times"></i>
                        </a>
                    </span>

                </a>
            }

        </>
    )

}

export default EditableItem
