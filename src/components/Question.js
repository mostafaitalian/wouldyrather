import React, {Component} from 'react'
import {Card, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
class Question extends Component{
    render(){
        //console.log('idddddddddd', this.props.id)
        return(
            <div className='questionbox'>
            <Card style={{margin:'5px', padding:'10px'}}>
                <Card.Header>
                    {this.props.id&&this.props.users[this.props.questions[this.props.id].author].name} asks..
                </Card.Header>
                <Card.Body style={{display:'flex'}}>
                    <div style={{flex:'0.3', padding:'5px'}}>
                        <img style={{borderRadius:'50%'}} src={this.props.id&&this.props.users[this.props.questions[this.props.id].author].avatarURL} alt='user avatar'/>
                    </div>
                    <div style={{borderLeft:'solid 2px lightgray', flex:'0.7', paddingLeft:'5px'}}>
                    <Card.Title>
                        would you rather..
                    </Card.Title>
                    <Card.Text style={{fontSize:'14px'}}>
                    {this.props.id&&this.props.questions[this.props.id].optionOne.text}

                    </Card.Text>
                    <Button onClick={()=>this.props.history.push(`question/${this.props.id}`)} variant='warning' style={{width:'100%', color:'black', fontSize:'20px', fontStretch:'expanded'}}>view poll now</Button>
                    </div>
                </Card.Body>
            </Card>

            </div>
        )
    }
}
function mapStateToProps(state, props){
    return {
        users:state.users,
        authUser:state.authUser,
        id:props.id,
        questions: state.questions,

    }
}
export default withRouter(connect(mapStateToProps)(Question))