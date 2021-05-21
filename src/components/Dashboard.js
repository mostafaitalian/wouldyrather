import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import { Container, Row, Col } from 'react-bootstrap'
import QuestionList from './QuestionList'
import '../index.css'

class Dashboard extends Component {
    state = { login: '' }
    isLogedIn = () => {
        const { authUser } = this.props.state
        if (authUser === undefined || authUser === "" || Object.keys(authUser).length === 0) {
            console.log('case undefined', authUser)
            return false

        }
        else {
            console.log('case else', authUser)

            return true
        }

    }
    componentDidMount() {
        this.setState({ login: this.props.state.authUser })

    }


    render() {
        const { questions, authUser } = this.props.state
        const questionFiltered = getOtherQuestions(questions, authUser)
        console.log('questions filtered', questionFiltered)
        console.log('login state in dash', this.state.login)

        return (
            <div>
                <Nav authUser={this.props.state.authUser} users={this.props.state.users} />

                <Container fluid>
                    <Row>
                        <Col>

                        </Col>
                        <Col lg={10} md={10} sm={10} xs={10}>
                            <QuestionList />
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                    <div>

                        {/* <QuestionDetail/> */}
                    </div>
                </Container>

            </div>
        )
    }
}
function getOtherQuestions(questions, authUser) {
    const questionsIds = Object.keys(questions)
    let result = {}
    for (const qid of questionsIds) {
        if (questions[qid].author !== authUser) {
            result = { ...result, [qid]: (questions[qid]) }
        }
    }
    return result
}

export default connect(state => { return { state: state } })(Dashboard)