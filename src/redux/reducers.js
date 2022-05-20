import * as actionTypes from './actionTypes'

const initialState = []
    

export const addTodoReducer = (state= initialState, action)=>{
    switch(action.type){
        case actionTypes.ADD_TASK : {
            return[
                ...state,
                {
                    text : action.payload,
                    status : false
                }
            ]
        }

        case actionTypes.TOGGLE_STATUS :{
            
            return state.map((todo,i,a) => {
                if ( i !== action.payload) {
                  return todo
                }
        
                return {
                  ...todo,
                  status: !todo.status,
                }
            })
        }
            
        
        case actionTypes.DELETE_TASK :{
            return state.filter((todo,i,a) => i !== action.payload)
        }

        case actionTypes.EDIT_TASK :{
            console.log(action.payload.task)
            return state.map((todo,i,a) => {
                if ( i !== action.payload.id) {
                  return todo
                }
        
                return {
                  text : action.payload.task,
                  status: false
                }
            })

        }

        default : return[
            ...state
        ]


    }



}  