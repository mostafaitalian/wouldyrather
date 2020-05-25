import {_getUsers, _getQuestions} from '../utils/_DATA'
import {addUsers} from './users'
import {addQuestions}  from './questions'
import {showLoading, hideLoading} from 'react-redux-loading'
import {getAuthUser} from './authUser'
export function handleInitialData(){
    return (dispatch, getState)=>{
        return Promise.all([_getUsers(), _getQuestions()])
        .then(([users, questions])=>{
            dispatch(showLoading)
            dispatch(addUsers(users))
            dispatch(addQuestions(questions))
            dispatch(getAuthUser())
            dispatch(hideLoading)
        })
    }
}