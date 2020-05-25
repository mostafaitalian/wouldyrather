export const ADD_AUTH_USER = 'ADD_AUTHUSER'
export const GET_AUTH_USER = 'GET_AUTH_USER'
export const REMOVE_AUTH_USER = 'REMOVE_AUTH_USER'
export function addAuthUser(id){
    return{
        type:ADD_AUTH_USER,
        id,
    }
}
export function removeAuthUser(){
    return{
        type:REMOVE_AUTH_USER
    }
}

export function getAuthUser(){
    return {
        type:GET_AUTH_USER
    }
}