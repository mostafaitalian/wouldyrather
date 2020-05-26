import  React, {Component} from 'react'
import {connect} from 'react-redux'
import {Tabs,Tab,Container, Row, Col} from 'react-bootstrap'

class QuestionList extends Component{

    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col>

                        </Col>
                        <Col lg={6} md={8} sm={10} xs={12}>
                            <Tabs id='controlled-tab' ActiveKey='unanswered' style={{display:'flex'}}>
                                <Tab eventKey='answered' title='answered' style={{width:'100%', flex:'0.5'}}>answered quesytion</Tab>
                                <Tab eventKey='unanswered' title='unanswered' style={{width:'100%', flex:'0.5'}}>unanswerd questions</Tab>
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
export default connect()(QuestionList)
