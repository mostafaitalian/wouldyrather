import {ADD_USERS, ADD_USER} from '../actions/users'
import {SAVE_QUESTION,MODIFY_QUESTION_USER} from '../actions/questions'



export default function users(state={}, action){
    switch(action.type){
        case ADD_USERS:
            return {...state, ...action.users}
        case ADD_USER:
            return {...state, [action.user.id]:{...action.user}}    
        case SAVE_QUESTION:
            return {...state, [action.question.author]:{...state[action.question.author],questions:state[action.question.author].questions.concat([action.question.id])}}
        case MODIFY_QUESTION_USER:
            const {authedUser, qid, answer} = action.data
            console.log('answersssss', state[authedUser])
            return {...state, [authedUser]:{...state[authedUser], answers:
                {...state[authedUser].answers,[qid]:answer}}}    
            
        default:
            return state    
    }
}
