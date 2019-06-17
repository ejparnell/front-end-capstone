import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { withRouter } from 'react-router-dom'
import HeroForm from './HeroForm'
// import Button from 'react-bootstrap/Button'

class HeroCreate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hero: {
        name: '',
        kin: '',
        alignment: '',
        specialty: '',
        age: '',
        owner: this.props.user
      }
    }
  }
  handleSubmit = async event => {
    event.preventDefault()
    const { user } = this.props
    await axios({
      url: apiUrl + '/heros',
      method: 'POST',
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: {
        hero: this.state.hero
      }
    })
    this.props.history.push('/')
  }
  handleChange = event => {
    const updatedField = {
      [event.target.name]: event.target.value
    }
    const editedHero = Object.assign(this.state.hero, updatedField)
    this.setState({ hero: editedHero })
  }
  diceRoll = () => {
    const abilityRoll = []
    for (let i = 0; i <= 5; i++) {
      let roll4 = []
      for (let i = 0; i <= 3; i++) {
        roll4.push(Math.floor(Math.random() * 6) + 1)
      }
      roll4 = roll4.sort((a, b) => a - b)
      roll4.shift()
      roll4 = roll4.reduce((a, b) => a + b)
      abilityRoll.push(roll4)
    }
    return abilityRoll
  }
  render () {
    const { hero } = this.state
    return (
      <div>
        <HeroForm
          hero={hero}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default withRouter(HeroCreate)
