import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Card} from 'react-bootstrap'
import {GiPodiumWinner} from 'react-icons/gi'
class User extends Component{
    render(){
        //const userIds = Object.keys(this.props.state.users)
        //const answers = users[id].answers

        const questionIds = Object.keys(this.props.state.questions)

        const user = this.props.state.users[this.props.id]
        //const answersUser = questionIds.length - user.questions.length
        return(
            <Card className='questionbox' style={{margin:'10px'}}>
                <Card.Header>
                    <span style={{display:'inline',marginRight:'5px'}}><img src={this.props.state.users[this.props.id].avatarURL} alt='avatar' style={{borderRadius:'50%', width:'40px'}}/></span><h5 style={{float:'right'}}>{this.props.state.users[this.props.id].name}</h5>
                </Card.Header>
                <Card.Body style={{display:'flex',flexDirection:'row'}}>
                    <div style={{textAlign:'center', flex:'0.2'}}>
                       <Card.Header> <GiPodiumWinner color='yellow' size='50%'/></Card.Header>
                    </div>
                    <div style={{borderLeft:'thin solid black',borderRight:'thin solid black', right:'80%', flex:'0.75', marginLeft:'10px'}} >
                    <Card.Text style={{marginLeft:'10px'}}>{user.name} has answered {Object.keys(user.answers).length} questions out of {questionIds.length}<br/><br/></Card.Text>
                    <Card.Text style={{marginLeft:'10px'}}>{user.name} has asked {user.questions.length}</Card.Text>
                    </div>
                   
                    <div style={{textAlign:'center', flex:'0.05'}}>
                    <Card.Header>Score</Card.Header>
                    <Card.Text>{Object.keys(user.answers).length + user.questions.length}</Card.Text>
                    
                        
                    
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

export default connect((state,props)=>({state:state,id:props.id}))(User)