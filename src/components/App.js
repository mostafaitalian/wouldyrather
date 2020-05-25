import React, {Component} from 'react'
import '../App.css'
import {handleInitialData} from '../actions/shared'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import { getAuthUser } from '../actions/authUser'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import Nav from './Nav'
class App extends Component {
  state={login:''}
  componentDidMount(){
    this.props.dispatch(handleInitialData())
    //this.setState({login:this.props.dispatch(getAuthUser())})
  }
  isLogedIn = ()=>{
    const {authUser} = this.props.state
    if(authUser===undefined || authUser==="" || Object.keys(authUser).length===0){
      console.log('case undefined', authUser)  
      return false

    }
    else{
      console.log('case else', authUser)  

        return true
    }

}
  render(){
    //console.log('login state in app', this.state.login, this.props.dispatch(getAuthUser()))

  return (
    <div>
    <Router>
    {/* <Route path='/' exact component={Dashboard}/> */}
      <Route path='/' exact render={()=>(
        this.isLogedIn()?<Dashboard/>:<Redirect to='/login'/>
      )}/>
      <Route path='/leaderboard' render={()=>(this.isLogedIn()?


<LeaderBoard/>:<Redirect to='/login'/>)}/>
<Route path='/newquestion' render={({history})=>(this.isLogedIn()?


<NewQuestion history={history}/>:<Redirect to='/login'/>)}/>
      <Route path='/login' component={Login}/>
    </Router>
  </div>    
  );
  }
}

export default connect(state=>{return{state:state}})(App);
