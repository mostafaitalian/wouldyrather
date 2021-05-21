export const ADD_USERS = 'ADD_USERS'
export const REMOVE_USER = 'REMOVE_USER'
export const ADD_USER = 'ADD_USER'

export function addUsers(users){
    return {
        type:ADD_USERS,
        users,
    }
}

export function addUser(user){
    return{
        type:ADD_USER,
        user,
    }
}