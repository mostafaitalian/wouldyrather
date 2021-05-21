import {_getUsers, _getQuestions, _saveUser, _saveQuestionAnswer} from '../utils/_DATA'
import {addUsers} from './users'
import {addQuestions, modifyQuestion}  from './questions'
import {showLoading, hideLoading} from 'react-redux-loading'
import {getAuthUser} from './authUser'
import {addUser} from './users'

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

export function handleRegisterUser(userData){
    return(dispatch, getState)=>{
        dispatch(showLoading())
        _saveUser(userData)
        
        .then(user=>{
            dispatch(addUser(user))
            dispatch(hideLoading())
        })
    }
}
export function handleQuestionAnswer(data){
    return(dispatch)=>{
        _saveQuestionAnswer(data).then(()=>dispatch(modifyQuestion(data)))
    }
}