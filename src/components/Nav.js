import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { Container,Col,Row} from 'react-bootstrap'
import { GrLogout } from 'react-icons/gr'
import {GiPodiumWinner} from 'react-icons/gi'

import { FaRegistered, FaHome, FaQuestionCircle } from 'react-icons/fa'


//import { GiPodiumWinner } from 'react-icons/gi'
import { removeAuthUser } from '../actions/authUser'
import { connect } from 'react-redux'
import '../App.css'
function Nav(props) {
  return (
    //     <Navbar bg="dark" variant="dark">
    //     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    //     <Nav className="mr-auto">
    //       <Nav.Link href="#home">Home</Nav.Link>
    //       <Nav.Link href="#features">Features</Nav.Link>
    //       <Nav.Link href="#pricing">Pricing</Nav.Link>
    //     </Nav>
    //     <Form inline>
    //       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    //       <Button variant="outline-info">Search</Button>
    //     </Form>
    //   </Navbar>
    // <Navv  style={{width:'100%'}}>
    //     <ul>
    //         <li>welcome {props.authUser}</li>
    //         <li style={{display:'inline-block', marginRight:'10px'}}><NavLink active href='' style={{display:'block', textDecoration:'none'}}>Leaderboard</NavLink></li>
    //         <li style={{display:'inline-block'}}><NavLink href='' style={{display:'inline', textDecoration:'none'}}>Ask a question</NavLink></li>
    //     </ul>
    //     <NavLink href='' style={{border:'solid 1px yellow',backgroundColor:'pink', borderRadius:'20%',borderColor:'red',display:'flex', justifyContent:'center'}}>Ask a question</NavLink>
    //     <NavLink href='' >Ask a question</NavLink>
    //     <NavLink href='' >Ask a question</NavLink>
    //     <NavLink href='' >Ask a question</NavLink>
    //    <NavLink href=''  >Ask a question</NavLink>
    //    <NavLink href='' style={{float:'right'}} >logout</NavLink>
    //    {/* <Nav.Item>
    //        <Nav.Link href='' >home</Nav.Link>
    //    </Nav.Item> */}

    // </Navv>












    <div>
      {/* <nav className="navbar navbar-expand-lg" style={{ background: '#EEFF86', border: '5px solid blue', borderRadius: '5px' }}>
        <a className="navbar-brand" href="#">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <GiHamburgerMenu />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h3>Would You Rather ...?</h3></div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink activeClassName='active' to="/" style={{ textDecoration: 'none', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 'solid 2px black', backgroundColor: 'yellow' }}>Home <span className="sr-only" >(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName='active' to="/leaderboard" style={{ marginLeft: '10px', textDecoration: 'none', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 'solid 2px black', backgroundColor: 'yellow' }}>Leaderboard</NavLink>
            </li>
            <li className="nav-item" >
              <NavLink activeClassName='active' to="/newquestion" style={{ textDecoration: 'none', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 'solid 2px black', backgroundColor: 'yellow' }}>New Question</NavLink>
            </li>
            <li className="nav-item" >
              <NavLink activeClassName='active' to="/newquestion" onClick={() => {
                props.dispatch(removeAuthUser())
                return <Redirect to='/login' />
              }} style={{ textDecoration: 'none', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 'solid 2px black', backgroundColor: 'yellow' }}>Logout</NavLink>
            </li>


          </ul>
          <Tabs id='controlled-tab' ActiveKey='unanswered' style={{ display: 'flex' }}>
            <Tab eventKey='answered' title='answered' style={{ width: '100%', flex: '0.5' }}></Tab>
            <Tab eventKey='unanswered' title='unanswered' style={{ width: '100%', flex: '0.5' }}></Tab>
          </Tabs>

          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <h4>Welcome {Object.keys(props.authUser).length !== 0 ? props.users[props.authUser].name : 'player'}</h4><span><img src={Object.keys(props.authUser).length !== 0 ? (props.users[props.authUser].avatarURL) : null} style={{ borderRadius: '50%', width: '40px', marginLeft: '5px', marginRight: '5px' }} /></span></div>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav> */}



      <section className="header">
        <div className="overlay">
          {/* <h2>Would you rather</h2> */}
          {/* <Row> */}
          {/* <div className="navbar navbar-default" style={{display:'flex', flexDirection:'row'}}> */}
          <Container fluid>
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            {/* <div className="navbar-header"> */}
            {/* <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                          </button> */}
            {/* <Col className="navlogo" lg={2}>
                                <a className="navbar-brand" href="#">Name</a>
                            </Col>
                           */}
            {/* </div> */}

            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}

            {/* <Row className="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> */}
            <Row>
              <Col className='navlogo navbar-default' lg={1}>
                <a className="navbar-brand" href="/" >Home</a>
              </Col>
              <Col className="navbar navbar-default" lg={8} style={{ textAlign: 'center' }}>
                <ul className="nav navbar-nav nav-links" style={{ display: 'flex', flexDirection: 'row' }}>
                  <li><NavLink to='/'><FaHome />Home</NavLink></li>
                  <li><NavLink to='/leaderboard'><GiPodiumWinner />LeaderBoard</NavLink></li>
                  <li><NavLink to='/newquestion'><FaQuestionCircle />newquestion</NavLink></li>
                 
                  <li><a href='#' disabled style={{ fontSize: '20px' }}>Welcome {Object.keys(props.authUser).length !== 0 ? props.users[props.authUser].name : 'player'}
                    <span><img src={Object.keys(props.authUser).length !== 0 ? (props.users[props.authUser].avatarURL) : null} style={{ borderRadius: '50%', width: '20px', marginLeft: '3px', marginRight: '3px' }}  alt='avattt'/></span>
                  </a></li>

                </ul>
              </Col>

              <Col className="navbar right navbar-default" lg={3}>
                <ul className="nav navbar-nav navbar-right" style={{ display: 'flex', flexDirection: 'row' }}>
                  <li>
                    <NavLink activeClassName='active' to="/" onClick={() => {
                      props.dispatch(removeAuthUser())
                      return <Redirect to='/login' />
                    }}>

                      <GrLogout />Logout</NavLink></li>
                  <li><NavLink to="/register"><FaRegistered />Register</NavLink></li>

                </ul>
              </Col>

            </Row>

            {/* <h2>would you rather</h2> */}
          </Container>
          {/* </div> */}


          {/* </Row> */}


          <center><h1 style={{marginTop:'100px'}}>Would You Rather...</h1></center>


        </div>
      </section>

<p></p>
    </div>
  )
}

export default connect()(Nav)