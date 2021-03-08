import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {useParams} from "react-router-dom";
import ModuleService from "../services/module-service";
import EditableItem from "./editable-item";

function ModuleList({
                    modules = [],
                    createModule,
                    updateModule,
                    deleteModule,
                    findModulesForCourse}) {

    const {layout, courseId, moduleId} = useParams();
    useEffect( ()=> {
        findModulesForCourse(courseId)
    }, [])

    return (

            <ul className="list-group">

                {
                    modules.map(module => (
                            <li className={`list-group-item module-tab ${ module._id === moduleId ? 'active': '' }`} key={module._id}>
                                <EditableItem item={module}
                                              updateItem={updateModule}
                                              deleteItem={deleteModule}
                                              to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                />
                            </li>
                        )
                    )
                }

                <br/>
                <li>
                    <button type="button"
                            className="btn add-module-button rounded-circle ">
                        <i className="fas fa-plus fa-2x" onClick={()=> createModule(courseId)}></i>
                    </button>
                </li>
            </ul>



    )
}

const stateToPropMapper = (state) => {
    return {
        modules: state.moduleReducer.modules,
    }
}

const dispatchToPropMapper = (dispatch) => {
    const moduleService = new ModuleService();
    return {
        createModule: (courseId) => {
            moduleService.createModule(courseId, {title: "New Module"})
                .then((theModule)=>{
                    dispatch({
                        type: "CREATE_MODULE",
                        payload: theModule
                    })
                })

        },
        updateModule: (newModule) => {
            moduleService.updateModule(newModule._id, newModule)
                .then((theModule)=>{
                    dispatch({
                        type: 'UPDATE_MODULE',
                        payload: newModule
                    })
                })
        },
        deleteModule: (module) => {
            moduleService.deleteModule(module._id)
                .then((theModule)=>{
                    dispatch({
                        type: 'DELETE_MODULE',
                        payload: module
                    })
                })
        },
        findModulesForCourse: (courseId)=>{
            moduleService.findModulesForCourse(courseId)
                .then((theModules)=>{
                    dispatch({
                        type: 'FIND_MODULES_FOR_COURSE',
                        payload: theModules
                    })
                })
        }

    }
}

export default connect(stateToPropMapper, dispatchToPropMapper)(ModuleList)