import { ADD_QUESTIONS, SAVE_QUESTION,MODIFY_QUESTION_USER } from '../actions/questions'



export default function questions(state={}, action){

    switch(action.type){
        case ADD_QUESTIONS:
            return {...state, ...action.questions}
        case SAVE_QUESTION:
            return {...state, [action.question.id]:{...action.question}}
        case MODIFY_QUESTION_USER:
            const answer = action.data.answer
            const qid = action.data.qid
            const authedUser = action.data.authedUser
            if(answer==='optionOne'){
            return {...state, [qid]:{...state[qid],
                optionOne:{...state[qid].optionOne,
                     votes: state[qid][answer].votes.includes(authedUser)?[...state[qid][answer].votes]:state[qid][answer].votes.concat([authedUser])},
                     optionTwo:{...state[qid].optionTwo,
                        votes:[...state[qid].optionTwo.votes.filter(uid=>uid!==authedUser)]} }}  }
                     else if(answer==='optionTwo'){
                                    return {...state, [qid]:{...state[qid],
                optionTwo:{...state[qid].optionTwo,
                     votes: state[qid].optionTwo.votes.includes(authedUser)?[...state[qid].optionTwo.votes]:state[qid].optionTwo.votes.concat([authedUser])},
                     optionOne:{...state[qid].optionOne,
                        votes:[...state[qid].optionOne.votes.filter(uid=>uid!==authedUser)]}}
                     }}
        default:
            return state    
    }
}