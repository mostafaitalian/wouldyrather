import React, {Component} from 'react'
import {Card, Form, Col, Row, Container, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {handleSaveQuestion} from '../actions/questions'
import {LoadingBar} from 'react-redux-loading'
import {withRouter} from 'react-router-dom'
import Nav from './Nav'
class NewQuestion extends Component{

    state={
        partOne:'',
        partTwo:'',
    }
    handleSubmit(e, partOne, partTwo, authUser){
        e.preventDefault()
        //const{partOne, partTwo} = this.state
        const question = {optionOneText:partOne, optionTwoText:partTwo, author:authUser}
        this.props.dispatch(handleSaveQuestion(question))
        this.setState({partOne:'', partTwo:''})
        //this.inputOne.value=''
        //this.inputTwo.value=''
        
        this.props.history.push('/')
     

    }

    render(){
        console.log('new question', this.props)
        const{partOne, partTwo} = this.state
        const {authUser} = this.props.state
        console.log('new question function inputs', partOne, partTwo, authUser)
        return(
            <Container fluid style={{margin:'1px',padding:'1px',width:"100%"}}>
             <Nav authUser={this.props.state.authUser} users={this.props.state.users} />
            <LoadingBar/>
            
                <Row>
                    <Col></Col>
                    <Col lg={8} md={8} sm={10} xs={12}>
                    <div>
            <h3>Create a new question</h3>
            <Card>
            <Card.Header>
                Complete the following question...
            </Card.Header>
            <Card.Body>
                <Card.Title>would you rather...?</Card.Title>
                <Form.Control ref={(input)=>this.inputOne=input} value={this.state.partOne} type='text' placeholder='option one' onChange={(e)=>this.setState({partOne:e.target.value})}/>
                <br/>
                <Card.Text>OR</Card.Text>
                <Form.Control ref={(input)=>this.inputTwo=input} value={this.state.partTwo} type='text' placeholder='option two' onChange={(e)=>this.setState({partTwo:e.target.value})}/>
                <br/>
                <Button variant='warning' style={{backgroundColor:'#EEFF86', width:'100%'}} disabled={this.state.partOne===''||this.state.partTwo===''} onClick={(e)=>{
                    
                    this.handleSubmit(e, partOne, partTwo, authUser)}}>submit</Button>
            </Card.Body>
            </Card>
            </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

        )
    }
}
function mapStateToProps(state){
    return{
        state,
    }
}
export default withRouter(connect(mapStateToProps)(NewQuestion))