import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import User from './user'
import { Link } from 'react-router-dom'
import Nav from './Nav'
class LeaderBoard extends Component {
    render() {
        const { users } = this.props
        const userIds = Object.keys(users)
        let userArray = []
        for (const uId of userIds) {
            userArray.push(users[uId])
        }
        let Arranged = userArray.sort((a, b) => {
            const lb = Object.keys(b.answers).length
            const la = Object.keys(a.answers).length
            const qb = b.questions.length
            const qa = a.questions.length
            return (lb + qb) - (la + qa)
        })
        console.log('users keys', Object.keys(this.props.users))
        return (
            <div style={{ width: '100%' }}>
                <Nav authUser={this.props.authUser} users={this.props.users} />

                <Container fluid style={{ margin: '0px', padding: '0px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', background: '#EEFF86', border: '5px solid blue', borderRadius: '5px', width: '100%' }}>
                        <div style={{ display: 'inline', flex: '0.96' }}><h3>Would You Rather ...?</h3></div>
                        <div style={{ display: 'inline', float: 'inline-end', border: '1px dashed blue', backgroundColor: 'white' }}><Link className='button--primary btn btn-primary' to='/login' >logout</Link></div>
                    </div>
                    <Row>
                        <Col>

                        </Col>
                        <Col lg={8} md={8} sm={10} xs={10}>
                            {/* (Object.keys(this.props.users)) */}
                            {Arranged.map(uid => {
                                console.log('uid', uid)

                                return <User key={uid.id} id={uid.id} />
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
        authUser: state.authUser,
        users: state.users,
        questions: state.questions
    }
}
export default connect(stateMapToProps)(LeaderBoard)