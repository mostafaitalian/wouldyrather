import {ADD_AUTH_USER, GET_AUTH_USER, REMOVE_AUTH_USER} from '../actions/authUser'


export default function authUser(state={}, action){

    switch(action.type){
        case ADD_AUTH_USER:
            return action.id
        case GET_AUTH_USER:
            return state
        case REMOVE_AUTH_USER:
            return {}        
        default:
            return state    
    }
}