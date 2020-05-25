import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addAuthUser } from '../actions/authUser'
import { Redirect } from 'react-router-dom'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap/'
import '../App.css'
import Nav from './Nav'

class Login extends Component {

    state = {
        username: ''
    }

    handleOnChange = (e) => {
        e.preventDefault()
        //document.querySelector('#img').remove()
        //console.log(e.target.value)
        this.setState({ username: e.target.value })
        document.querySelector('#dd').innerHTML = ''
        const x = document.querySelector('select')
        const s = document.createElement('span')
        const i = document.createElement('img')
        i.id = 'img'

        const xx = this.props.users[e.target.value].avatarURL
        const xxxx = require('../images/avatar1.jpg')
        const d = document.querySelector('#dd')
        const dd = document.createElement('div')
        d.appendChild(dd)
        i.src = this.props.users[e.target.value].avatarURL
        i.style = 'width:10%'
        i.style = 'height:auto'
        i.style = 'border-radius:50%'

        dd.appendChild(i)
        d.append(`you are successfully ${this.props.users[e.target.value].name}`)
        //d.innerHTML=''
        //const xxx = `background-img: url(${xx})`
        console.log('xxxxx', xx)
        //x.style= xxx
        //x.style='background-repeat: no-repeat'
        //console.log(this.state.username)
    }
    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(addAuthUser(this.state.username))
        //this.props.dispatch(addAuthUser(this.state.username))
        this.props.history.push('/')
        // if(this.props.authUser!==undefined){
        // return <Redirect to='/'/>}
        // //this.props.history.replace('/')
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


            <div style={{ width: '100%', height: '1000px', backgroundColor: 'lightgray' }}>
                <div style={{ display: 'flex', justifyContent: 'center', background: '#EEFF86', border: '5px solid blue', borderRadius: '5px' }}>
                    <h3>Would You Rather ...?</h3></div>
                <br />
                <div style={{ display: 'flex', justifyContent: 'center', justifyItems: 'stretch', alignItems: 'center' }}>
                    <Image src={require('../images/1.jpg')} roundedCircle style={{ width: '400px', height: '300px' }} />




                </div>
                <br />
                <Row>
                    <Col></Col>
                    <Col xs={10} sm={10} md={6}>
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', border: '1px solid black', height: '300px' }}>
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
                            <div style={{ textAlign: 'center' }}>
                                <div id='dd' style={{ display: 'inline-block' }}></div>
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