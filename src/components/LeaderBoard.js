import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import User from './user'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import Nav from './Nav'
class LeaderBoard extends Component {
    render() {
        console.log('users keys', Object.keys(this.props.users))
        return (
            <div style={{ width: '100%' }}>
            
                <Container fluid style={{ margin: '0px', padding: '0px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', background: '#EEFF86', border: '5px solid blue', borderRadius: '5px', width: '100%' }}>
                        <div style={{ display: 'inline', flex: '0.96' }}><h3>Would You Rather ...?</h3></div>
                        <div style={{ display: 'inline', float: 'inline-end', border: '1px dashed blue', backgroundColor: 'white' }}><Link className='button--primary btn btn-primary-outline' to='/login' >logout</Link></div>
                    </div>
                    <Row>
                        <Col>

                        </Col>
                        <Col lg={8} md={8} sm={10} xs={10}>
                            {(Object.keys(this.props.users)).map(uid => {
                                console.log('uid', uid)

                                return <User key={uid} id={uid} />
                            })}
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
function stateMapToProps(state, props) {
    return {
        users: state.users,
        questions: state.questions
    }
}
export default connect(stateMapToProps)(LeaderBoard)