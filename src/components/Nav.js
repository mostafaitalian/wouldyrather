import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav as Navv, Form, FormControl, Navbar, Button } from 'react-bootstrap'
import { GiHamburgerMenu } from 'react-icons/gi'


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
    <nav className="navbar navbar-expand-lg" style={{ background: '#EEFF86', border: '5px solid blue', borderRadius: '5px' }}>
      <a className="navbar-brand" href="#">Home</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <GiHamburgerMenu />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent" >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h3>Would You Rather ...?</h3></div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" activeClassName='active' to="/">Home <span className="sr-only" >(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName='active' to="/leaderboard">Leaderboard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName='active' to="/newquestion">New Question</NavLink>
          </li>

        </ul>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <h4>Welcome {props.authUser===undefined?props.users[props.authUser].name:'player'}</h4><span><img src={props.authUser===undefined?props.users[props.authUser].avatarURL:null} style={{ borderRadius: '50%', width: '40px', marginLeft: '5px', marginRight: '5px' }} /></span></div>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}

export default Nav