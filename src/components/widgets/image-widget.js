import React, {useState} from 'react'

function ImageWidget({widget, select, setEditingWidget}){

    return(
        <>
            {
                !select &&
                <img src={widget.url} width={widget.width} height={widget.height}/>
            }
            {
                select &&
                    <form>
                        <br/>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Image URL</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                   value={widget.url}
                                   onChange={(event)=> {
                                       setEditingWidget({...widget, url: event.target.value})
                                   }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Image Width</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                   value={widget.width}
                                   onChange={(event)=> {
                                       setEditingWidget({...widget, width: event.target.value})
                                   }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Image Height</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                   value={widget.height}
                                   onChange={(event)=> {
                                       setEditingWidget({...widget, height: event.target.value})
                                   }}
                            />
                        </div>

                    </form>
            }
        </>
    )
}

export default ImageWidget