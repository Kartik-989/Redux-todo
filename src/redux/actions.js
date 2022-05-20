import * as actionTypes from './actionTypes'

export const addTask = (task )=>{
    return({
        type : actionTypes.ADD_TASK,
        payload : task
    })
}

export const editTask = (id,task )=>{
    return({
        type : actionTypes.EDIT_TASK,
        payload : {id , task}
    })
}
export const delTask = (id )=>{
    return({
        type : actionTypes.DELETE_TASK,
        payload : id
    })
}
export const toggleStatus = (id )=>{
    return({
        type : actionTypes.TOGGLE_STATUS,
        payload : id
    })
}

