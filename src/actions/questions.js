import { _saveQuestion } from '../utils/_DATA'
import {showLoading, hideLoading} from 'react-redux-loading'
export const ADD_QUESTIONS='ADD_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'

export function addQuestions(questions){
    return{
        type:ADD_QUESTIONS,
        questions,
    }
}
export function saveQuestion(question){
    return{
        type:SAVE_QUESTION,
        question,
    }
}


export function handleSaveQuestion(question){
    return (dispatch)=>{
        return _saveQuestion(question).then(question=>{
            console.log('saveeeeeee', question)
            dispatch(showLoading())
            dispatch(saveQuestion(question))})
            dispatch(hideLoading())
    }
}