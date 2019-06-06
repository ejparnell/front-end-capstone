import React, { Component } from 'react'
import './App.scss'
import { Route, withRouter } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import Heros from './hero/components/Heros'
import HeroCreate from './hero/components/HeroCreate'
import Hero from './hero/components/Hero'
import HeroUpdate from './hero/components/HeroUpdate'

import Alert from 'react-bootstrap/Alert'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <Alert key={index} dismissible variant={alert.type}>
            <Alert.Heading>
              {alert.message}
            </Alert.Heading>
          </Alert>
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/heros' render={() => (
            <Heros user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/heros/create' render={() => (
            <HeroCreate user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/heros/:id/update' render={({ match }) => (
            <HeroUpdate match={match} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/heros/:id' render={({ match }) => (
            <Hero match={match} user={user} />
          )} />
        </main>
      </React.Fragment>
    )
  }
}

export default withRouter(App)
