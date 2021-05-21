import React, { Component } from 'react'
import '../App.css'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import QuestionDetail from './QuestionDetail'
import Register from './Register'
import Error404 from './Error404'
import Undifined from './Undifined'

class App extends Component {
  state = { isAuthenticated: false }
  componentDidMount() {
    this.props.dispatch(handleInitialData())
    const { authUser } = this.props.state
    console.log('authUseeeeeeeeeeeeeeee', authUser)
  }
  handleIsAuthenticated = (authUserr) => {
    this.setState({ isAuthenticated: authUserr === undefined || authUserr === "" || Object.keys(authUserr).length === 0 ? false : true })

  }
  isLogedIn = () => {
    const { authUser } = this.props.state
    if (authUser === undefined || authUser === "" || Object.keys(authUser).length === 0) {

      return false

    }
    else {

      return true
    }

  }
  render() {

    return (
      <div>
        <Router>
          <ProtectedRoute path='/' exact cd={this.isLogedIn} component={Dashboard} />
          <Route path='/register' exact render={({ history }) => (this.isLogedIn() ?


            <Register history={history} /> : <Register history={history} />)} />
          <ProtectedRoute path='/newquestion' exact component={NewQuestion} cd={this.isLogedIn} />

          <ProtectedRoute path='/leaderboard' exact component={LeaderBoard} cd={this.isLogedIn} />

          <Switch>
            <ProtectedRoute path='/question/:id' component={QuestionDetail} cd={this.isLogedIn} />
            <ProtectedRoute path='/notfound' component={Undifined} cd={this.isLogedIn} />
          </Switch>


          <Route path='/login' render={({ history }) => <Login history={history} />} />

        </Router>
      </div>
    );
  }
}

const ProtectedRoute = ({ component: Component, cd: Cd, ...rest }) => (
  <Route {...rest}
    render={(props, match) => Cd() ?
      <Component {...props} {...match} /> :
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
  />)


export default connect(state => { return { state: state } })(App);
