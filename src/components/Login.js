import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addAuthUser } from '../actions/authUser'
//import { Redirect } from 'react-router-dom'
import { Row, Col, Image, Form, Button } from 'react-bootstrap/'
import '../App.css'
import Nav from './Nav'
import { Link } from 'react-router-dom'
//import Register from './Register'
import Progress from './Progress'
class Login extends Component {

    state = {
        username: ''
    }

    handleOnChange = (e) => {
        e.preventDefault()
   
        this.setState({ username: e.target.value })

    }
    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(addAuthUser(this.state.username))


        const { from } = this.props.history.location.state || { from: { pathname: '/' } }

        console.log('from', this.props)
        this.props.history.push(from.pathname)
    }
    render() {
        const s = require('../images/avatar8.jpg')

        //console.log('login props', this.props)
        const keys = Object.keys(this.props.users)
        let options = []
        for (const key of keys) {
            const d = <option key={key} value={key} style={{ backgroundImage: `url(${s})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>{this.props.users[key].name}</option>
            console.log('avatar', this.props.users[key].avatarURL)
            options.push(d)
        }
        console.log('in render', this.state.username)

        return (


            <div style={{ width: '100%', height: '1000px' }}>
                <Nav authUser={this.props.authUser} users={this.props.users} />

                <div style={{ display: 'flex', justifyContent: 'center', background: '#EEFF86', border: '5px solid blue', borderRadius: '5px' }}>
                    <h3>Would You Rather ...?</h3></div>
                <br />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image src={require('../images/1.jpg')} className='login-img' style={{ width: '300px', height: '300px', borderRadius: '50%' }} />




                </div>
                <Row>
                    <Link to='/register' className='register-link'>Register from here and create a new user</Link>

                </Row>
                <br />
                <Row>
                    <Col>


                    </Col>
                    <Col xs={10} sm={10} md={6}>
                        <div className='questionbox' style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', flexDirection: 'column', border: '1px transparent black', height: '300px', borderRadius: '10px' }}>
                            <Form onSubmit={this.handleOnSubmit} style={{ width: '90%', marginLeft: '10px', textAlign: 'center' }}>
                                <Form.Group controlId='exampleForm'>
                                    <center><Form.Label style={{ fontSize: '24px' }}><b>Choose Your Account</b></Form.Label></center>
                                    <Form.Control as='select' value={this.state.username} onChange={this.handleOnChange}>
                                        <option value='' style={{ background: 'cyan', height: '120px' }} disabled>choose your account</option>
                                        {



                                            options.map(o => o)




                                        }
                                    </Form.Control>
                                    <Form.Text>you have to choose from various accounts</Form.Text>



                                </Form.Group>
                                <Form.Group>
                                    <center><Button type='submit' variant='success'>submit</Button></center>
                                </Form.Group>
                            </Form>
                            <div style={{ textAlign: 'center', backgroundColor: 'rgba(18,18,18,0.1)', display: 'flex', flexDirection: 'row', verticalAlign: 'middle', justifyContent: 'center' }} hidden={this.state.username.length === 0}>
                                <p style={{ fontFamily: 'Palatino' }}>Welcome..</p>
                                <div id='dd' style={{ display: 'inline-block', textAlign: 'center' }}>
                                    <img src={this.state.username.length > 0 ? this.props.users[this.state.username].avatarURL : ''} alt='login user' style={{ borderRadius: '50%' }} />
                                </div>
                                <p style={{ fontFamily: 'Palatino' }}>{this.state.username.length > 0 ? this.props.users[this.state.username].name : 'player'}</p>

                            </div>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </div>

        )
    }
}
function mapStateToProps(state, props) {
    const { users, authUser } = state
    return {
        users,
        authUser,
    }
}
export default connect(mapStateToProps)(Login)