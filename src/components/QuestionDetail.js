import React, { Component } from 'react'
//import { withRouter } from 'react-router-dom'
import '../App.css'
import { connect } from 'react-redux'
import Nav from './Nav'
import { Button } from 'react-bootstrap'
import {handleQuestionAnswer} from '../actions/shared'
import Progress from './Progress'
import {Redirect} from 'react-router-dom'
import Undifined from './Undifined'
class QuestionDetail extends Component {
    state={
        answer:''
    }
    handleOnsubmit=(e)=>{
        e.preventDefault()
        let answer = ''
        if(this.state.answer==='optionone'){
            //answer = this.props.questions[this.props.match.params.id].optionOne.text
            answer='optionOne'
        }
        else if(this.state.answer==='optiontwo'){
            answer='optionTwo'
            //answer = this.props.questions[this.props.match.params.id].optionTwo.text
        }



        


        //const { authedUser, qid, answer } = data
        const data = {authedUser: this.props.authUser,qid:this.props.match.params.id,answer:answer }
        console.log('data', data)
        this.props.dispatch(handleQuestionAnswer(data))
    }

    render() {
        const {users, authUser, questions} = this.props
        let id= this.props.match!==undefined?this.props.match.params.id:''
        console.log('idddddddddddddddddddddddddddddddddd', id, typeof(id), Object.keys(questions).filter(qid=>qid===id))
        
        if(Object.keys(questions).filter(qid=>qid===id).length===0){
            return <Redirect to='/notfound' component={Undifined}/>
        }
        
        console.log('question detaaaaaaaaaaaaaaaaaaaaaaaaaaaaaail', this.props, id)
        //const {author} = (this.props.questions[this.props.match.params.id])
        if (this.props.match !== undefined) {
            console.log(this.props.match.params, (this.props.questions[this.props.match.params.id].author), typeof ((this.props.questions[this.props.match.params.id])))
        }
        console.log(this.state.answer)
        const userAnswers = this.props.users[this.props.authUser].answers
        const answerArray = Object.keys(userAnswers)

        const voteOne = questions[id].optionOne.votes.length
        const voteTwo = questions[id].optionTwo.votes.length
        const voteTwoItems = questions[id].optionTwo.votes
        const voteOneItems = questions[id].optionOne.votes

        const percentageVotesOne = (voteOne/(voteOne+voteTwo))*100
        const percentageVotesTwo = (voteTwo/(voteOne+voteTwo))*100

        return (
            <div style={{ width: '100%' }}>
                <Nav authUser={this.props.authUser} users={this.props.users} />
                <div
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

                    {/* {this.props.match!==undefined&&this.props.match.params.id}
                QuestionDetail */}
                    <div className='questionbox qcard' style={{ backgroundColor: 'white', margin: '50px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', width: '50%', minWidth: "600px", maxWidth: '800px' }}>
                        <div className='qcard-header' style={{ backgroundColor: 'lightgray', height: '3em', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', textAlign: 'center' }}>
                            <p style={{ marginTop: '10px', fontSize: '20px', fontFamily: 'Palatino Linotype' }}>{this.props.match !== undefined && this.props.users[(this.props.questions[this.props.match.params.id]).author].name} asks..</p>
                        </div>
                        <div style={{display:'flex', flexDirection:'row', position:'relative',verticalAlign:'center', alignContent:'center', alignItems:'center'}}>
                        <div style={{position:'relative', flex:'0.4', margin:'20px', verticalAlign:'center', alignContent:'center'}}>
                        <div style={{position:'relative'}}>
                        <img src={users[(questions[id].author)].avatarURL} alt='user avatar' style={{borderRadius:'50%'}}/>
                        </div></div>
                        
                        
                        
                        
                        <div className='qcard-body' style={{ padding: '10px', borderLeft:'solid 2px rgb(0,0,0,0.1)', margin:'10px' }}>
                            <div className='qcard-body-title' style={{ fontSize: '30px', fontFamily: "Palatino LinoType" }}>
                                Would you rather...
                        <br />
                                <hr />
                            </div>
                            <div className='qcard-body-content'>
                                <form style={{ width: '100%' }} onSubmit={this.handleOnsubmit}>
                                    <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                                        <p style={{ flex: '0.70', fontSize: '20px', fontFamily: "Palatino LinoType" }}>{this.props.match !== undefined && (this.props.questions[this.props.match.params.id]).optionOne.text}</p>
                                        <div style={{flex: '0.30' }}><input type='radio' name='answer' value='optionone' onChange={(e)=>this.setState({answer:e.target.value})} /></div>
                                    </div>


                                    {answerArray.includes(id)?<Progress width={percentageVotesOne}/>:''}
                                    <div style={{display:'flex', flexDirection:'row', margin:'5px'}}>

                                    <span style={{flex:'0.7'}}>{answerArray.includes(id)?`(${voteOne} out of ${voteOne+voteTwo})-${percentageVotesOne.toFixed(2)}%`:''}</span>
                                    {voteOneItems.includes(authUser)&&
                                    <div style={{backgroundColor:'orange', borderRadius:'20px', border:'transparent', width:'fit-content', padding:'10px'}}>
                                    your answer</div>}
                                    </div>
                                    <br />
                                    <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>

                                        <p style={{ flex: '0.70', fontSize: '20px', fontFamily: "Palatino LinoType" }}>{this.props.match !== undefined && (this.props.questions[this.props.match.params.id]).optionTwo.text}</p>
                                        <div style={{ float: 'right', flex: '0.30' }}>
                                            <input type='radio' name='answer' value='optiontwo' onChange={(e)=>this.setState({answer:e.target.value})}/></div>
                                    </div>
                                    {answerArray.includes(id)?<Progress width={percentageVotesTwo}/>:''}
                                    <div style={{display:'flex', flexDirection:'row'}}>
                                    <span style={{flex:'0.7'}}>{answerArray.includes(id)?`(${voteTwo} out of ${voteOne+voteTwo})-${percentageVotesTwo.toFixed(2)}%`:''}</span>
                                    {voteTwoItems.includes(authUser)&&<div style={{backgroundColor:'orange', borderRadius:'20px', border:'transparent', width:'fit-content', padding:'10px', margin:'5px'}}>your answer</div>}
                                    </div>
                                    <br/>
                                    <Button type='submit' variant='warning' style={{ display: 'block', width: '100%' }}>submit</Button>
                                </form>
                                {/* <div style={{backgroundColor: 'darkgray'}}>
                            <br/><br/>
                        </div> */}
                            </div>
                        </div>
                        </div>

                    </div>



                    
                </div>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        users: state.users,
        authUser: state.authUser,
        questions: state.questions,
    }
})(QuestionDetail)