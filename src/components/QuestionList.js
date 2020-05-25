import  React, {Component} from 'react'
import {connect} from 'react-redux'


class QuestionList extends Component{

    render(){
        return(
            <div>
                questionList
            </div>
        )
    }
}
function mapStateToProps(state, ownProps){
    return {
        questions:state.questions,
        authUser:state.authUser,
        users:state.users,
    }
}
export default connect()(QuestionList)
