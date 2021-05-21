import React, {Component} from 'react'
import {Form, Button} from 'react-bootstrap'
import {handleRegisterUser} from '../actions/shared'
import {connect} from 'react-redux'
import Nav from './Nav'
class Register extends Component{
    state = {
        name:'',
        avatar:'',
    }
    handleInputOnChange=(e)=>{
        const value =e.target.value
        this.setState({name:value})
    }
    handleSelectOnChange=(e)=>{
        const value = e.target.value
        const avatarURL = `../images/${value}.jpg`
        this.setState({avatar:avatarURL})
    }
    handleOnSubmit = (e)=>{
        e.preventDefault()
        console.log('register-state', this.state)
        console.log('register-props', this.props)
        
        this.props.dispatch(handleRegisterUser(this.state))
        this.props.history.push('/login')

    }
    render(){
        return(
            <div>

            <Nav users={this.props.state.users} authUser={this.props.state.authUser}/>
            <div style={{width:'100%', padding:'20px'}}>
                <Form style={{width:'100%'}}  onSubmit={this.handleOnSubmit}>
                    <Form.Group>
                        <Form.Label For='input-name'>Name</Form.Label>
                        <Form.Control type='text' id='input-name' onChange={this.handleInputOnChange}/> 
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Avatar</Form.Label>
                        <Form.Control as='select' onChange={this.handleSelectOnChange}>
                            <option value=''>Select avatar</option>
                            <option value='avatar1'>Avatar 1</option>
                            <option value='avatar2'>Avatar 2</option>
                            <option value='avatar3'>Avatar 3</option>
                            <option value='avatar4'>Avatar 4</option>
                            <option value='avatar5'>Avatar 5</option>
                            <option value='avatar6'>Avatar 6</option>
                            <option value='avatar7'>Avatar 7</option>
                            <option value='avatar8'>Avatar 8</option>

                        </Form.Control>
                    </Form.Group>
                    <Button type='submit' variant='primary' disabled={this.state.name==='' || this.state.avatar===''}>Add User</Button>
                </Form>
            </div>
            </div>
        )
    }
}

export default connect(state=>({state,}))(Register)