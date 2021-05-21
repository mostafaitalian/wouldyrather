import  React, {Component} from 'react'
import {connect} from 'react-redux'
import {Tabs,Tab,Container, Row, Col} from 'react-bootstrap'
import Question from './Question'
class QuestionList extends Component{

    render(){
        const {users} = this.props
        const auUser = users[this.props.authUser]
        const userAnswers = auUser.answers
        const keys = Object.keys(userAnswers)
        console.log('keys', keys, keys[0])
        const qKeys = Object.keys(this.props.questions)
        let qArray = []
        let answeredArray = []
        let unansweredArray = []
        for(const k of qKeys){
            qArray = qArray.concat([this.props.questions[k]])
        }
        console.log('qarray',qArray)
        
        for(const q in qArray){
            console.log(qArray[q].id)
            if(keys.includes(qArray[q].id)){
                answeredArray.push(qArray[q])
            }
            else{
                unansweredArray.push(qArray[q])
            }
        }
        console.log('answered q', answeredArray, '   unanswerde', unansweredArray)
        return(
            <div>
                <Container>
                <Row><Col>
                    {/* <nav>
                        <Tabs  style={{display:'flex', justifyContent:'space-around'}}>
                            <Tab className='tabo' eventKey='home' title='home' style={{width:'20px'}}></Tab>
                            <Tab className='tabo' eventKey='about' title='about'></Tab>
                            <Tab className='tabo' eventKey='about' title='about'></Tab>
                            <Tab className='tabo' eventKey='about' title='about'></Tab>
                            <Tab className='tabo' eventKey='about' title='about'></Tab>

                        </Tabs>
                    </nav> */}
                    </Col>
                </Row>
                    <Row style={{marginTop:'25px'}}>
                        <Col>

                        </Col>
                        <Col  lg={6} md={8} sm={10} xs={12}>
                            <Tabs className='navbar navbar-default nav-links'  id='controlled-tab' style={{display:'flex'}}>
                                
                                <Tab eventKey='unanswered' title='unanswered' style={{width:'100%', flex:'0.5'}}>
                                <div style={{marginTop:'25px'}}>

                                {unansweredArray.length===0&&<h2>you answered all question in the game</h2>}

                                {
                                    unansweredArray.sort((a,b)=>b.timestamp-a.timestamp).map((qid)=>{
                                       return <Question key={qid.id} id={qid.id}/>
                                    })
                                }
                                </div>
                                </Tab>
                                <Tab eventKey='answered' title='answered' style={{width:'100%', flex:'0.5', }}>
                                <div style={{marginTop:'25px'}}>
                                {answeredArray.length===0&&<h4>you didnot answer any question yet</h4>}
                                {
                                    answeredArray.sort((a,b)=>b.timestamp-a.timestamp).map((qid)=>{
                                       return <Question key={qid.id} id={qid.id}/>
                                    })
                                }
                                </div>
                                </Tab>
                            </Tabs>
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </Container>
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
export default connect(mapStateToProps)(QuestionList)
